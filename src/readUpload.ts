import * as XLSX from "xlsx";

export type FileKind = "csv" | "sheet" | "json" | "pdf";
export type ReadFailure = "type" | "size" | "parse" | "empty";

export interface SheetView {
  name: string;
  rows: string[][];
  totalRows: number;
  colsCut: boolean;
}

export interface OpenFile {
  id: string;
  name: string;
  kind: FileKind;
  sheets: SheetView[];
  jsonText: string;
  jsonCut: boolean;
  pdfData: Uint8Array | null;
}

export type ReadResult =
  | { ok: true; file: OpenFile }
  | { ok: false; name: string; reason: ReadFailure };

const MAX_BYTES = 12 * 1024 * 1024;
const MAX_ROWS = 400;
const MAX_COLS = 24;
const MAX_JSON_CHARS = 180_000;

function extensionOf(name: string): string {
  const dot = name.lastIndexOf(".");
  if (dot < 0 || dot === name.length - 1) {
    return "";
  }
  return name.slice(dot + 1).toLocaleLowerCase("en");
}

function kindOf(extension: string): FileKind | null {
  switch (extension) {
    case "csv":
      return "csv";
    case "xls":
    case "xlsx":
      return "sheet";
    case "json":
      return "json";
    case "pdf":
      return "pdf";
    default:
      return null;
  }
}

function cellText(value: unknown): string {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "bigint") {
    return value.toString();
  }
  if (typeof value === "object" && value !== null) {
    try {
      return JSON.stringify(value) ?? "";
    } catch {
      return "";
    }
  }
  return "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function matrixFromSheet(sheet: XLSX.WorkSheet | undefined): SheetView {
  if (!sheet) {
    return { name: "", rows: [], totalRows: 0, colsCut: false };
  }
  const matrix = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    raw: false,
    defval: "",
    blankrows: false,
  }) as unknown[];
  let colsCut = false;
  const rows = matrix.slice(0, MAX_ROWS).map((row) => {
    const cells = Array.isArray(row) ? row : [row];
    if (cells.length > MAX_COLS) {
      colsCut = true;
    }
    return cells.slice(0, MAX_COLS).map((cell) => cellText(cell));
  });
  return {
    name: "",
    rows,
    totalRows: matrix.length,
    colsCut,
  };
}

function decodeCsv(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const start = bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf ? 3 : 0;
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes.subarray(start));
  } catch {
    return new TextDecoder("windows-1252").decode(bytes.subarray(start));
  }
}

function sheetsFromBook(book: XLSX.WorkBook): SheetView[] {
  return book.SheetNames.map((name) => {
    const view = matrixFromSheet(book.Sheets[name]);
    return { ...view, name };
  });
}

function objectsToSheet(records: readonly Record<string, unknown>[]): SheetView {
  const keys: string[] = [];
  let colsCut = false;
  for (const record of records) {
    for (const key of Object.keys(record)) {
      if (keys.includes(key)) {
        continue;
      }
      if (keys.length >= MAX_COLS) {
        colsCut = true;
        break;
      }
      keys.push(key);
    }
  }
  const body = records.slice(0, MAX_ROWS).map((record) => keys.map((key) => cellText(record[key])));
  return {
    name: "JSON",
    rows: [keys, ...body],
    totalRows: records.length + 1,
    colsCut,
  };
}

function jsonSheets(value: unknown): SheetView[] {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return [];
    }
    if (value.every((item) => isRecord(item))) {
      return [objectsToSheet(value.filter(isRecord))];
    }
    const primitive = value.every(
      (item) => item === null || ["string", "number", "boolean"].includes(typeof item),
    );
    if (!primitive) {
      return [];
    }
    const rows = value.slice(0, MAX_ROWS).map((item) => [cellText(item)]);
    return [
      {
        name: "JSON",
        rows: [["value"], ...rows],
        totalRows: value.length + 1,
        colsCut: false,
      },
    ];
  }
  if (!isRecord(value)) {
    return [];
  }
  const entries = Object.entries(value);
  const shown = entries.slice(0, MAX_ROWS);
  return [
    {
      name: "JSON",
      rows: [["key", "value"], ...shown.map(([key, cell]) => [key, cellText(cell)])],
      totalRows: entries.length + 1,
      colsCut: false,
    },
  ];
}

function baseFile(file: File, kind: FileKind): OpenFile {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
    name: file.name,
    kind,
    sheets: [],
    jsonText: "",
    jsonCut: false,
    pdfData: null,
  };
}

export async function readUpload(file: File): Promise<ReadResult> {
  if (file.size === 0) {
    return { ok: false, name: file.name, reason: "empty" };
  }
  if (file.size > MAX_BYTES) {
    return { ok: false, name: file.name, reason: "size" };
  }
  const kind = kindOf(extensionOf(file.name));
  if (!kind) {
    return { ok: false, name: file.name, reason: "type" };
  }
  try {
    switch (kind) {
      case "csv":
      case "sheet": {
        const buffer = await file.arrayBuffer();
        const book =
          kind === "csv"
            ? XLSX.read(decodeCsv(buffer), { type: "string" })
            : XLSX.read(buffer, { type: "array" });
        if (book.SheetNames.length === 0) {
          return { ok: false, name: file.name, reason: "empty" };
        }
        const sheets = sheetsFromBook(book).map((sheet) =>
          kind === "csv" && sheet.name === "Sheet1" ? { ...sheet, name: "CSV" } : sheet,
        );
        return {
          ok: true,
          file: { ...baseFile(file, kind), sheets },
        };
      }
      case "json": {
        const parsed: unknown = JSON.parse(await file.text());
        let jsonText = JSON.stringify(parsed, null, 2) ?? "";
        let jsonCut = false;
        if (jsonText.length > MAX_JSON_CHARS) {
          jsonText = `${jsonText.slice(0, MAX_JSON_CHARS)}\n…`;
          jsonCut = true;
        }
        return {
          ok: true,
          file: {
            ...baseFile(file, "json"),
            jsonText,
            jsonCut,
            sheets: jsonSheets(parsed),
          },
        };
      }
      case "pdf": {
        const pdfData = new Uint8Array(await file.arrayBuffer());
        if (pdfData.byteLength < 5 || String.fromCharCode(...pdfData.slice(0, 4)) !== "%PDF") {
          return { ok: false, name: file.name, reason: "parse" };
        }
        return { ok: true, file: { ...baseFile(file, "pdf"), pdfData } };
      }
      default: {
        const exhaustive: never = kind;
        return exhaustive;
      }
    }
  } catch {
    return { ok: false, name: file.name, reason: "parse" };
  }
}

import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy, type RenderTask } from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { copy, fileErrorText } from "./i18n.ts";
import { readUpload, type OpenFile, type ReadFailure, type SheetView } from "./readUpload.ts";
import type { Lang } from "./types.ts";

GlobalWorkerOptions.workerSrc = workerSrc;

const MAX_OPEN = 6;
const FIRST_ROWS = 40;
const ROW_STEP = 80;

interface DeckError {
  id: string;
  name: string;
  reason: ReadFailure;
}

interface FileDeckProps {
  lang: Lang;
}

function sheetClipped(sheet: SheetView | undefined): boolean {
  if (!sheet) {
    return false;
  }
  return sheet.colsCut || sheet.totalRows > sheet.rows.length;
}

function FileDeck({ lang }: FileDeckProps) {
  const text = copy(lang);
  const [files, setFiles] = useState<OpenFile[]>([]);
  const [errors, setErrors] = useState<DeckError[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [sheetIndex, setSheetIndex] = useState(0);
  const [shownRows, setShownRows] = useState(FIRST_ROWS);
  const [page, setPage] = useState(1);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [pdfError, setPdfError] = useState(false);
  const [reading, setReading] = useState(false);
  const [dragDepth, setDragDepth] = useState(0);
  const [banner, setBanner] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const active = files.find((file) => file.id === activeId) ?? null;
  const sheet = active?.sheets[sheetIndex];

  useEffect(() => {
    const data = active?.kind === "pdf" ? active.pdfData : null;
    if (!data) {
      setDoc(null);
      return;
    }
    let cancelled = false;
    setPdfError(false);
    const loading = getDocument({ data: data.slice(0) });
    loading.promise
      .then((loaded) => {
        if (cancelled) {
          return;
        }
        setDoc(loaded);
      })
      .catch(() => {
        if (!cancelled) {
          setDoc(null);
          setPdfError(true);
        }
      });
    return () => {
      cancelled = true;
      void loading.destroy();
      setDoc(null);
    };
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!doc || !canvas || !stage || active?.kind !== "pdf") {
      return;
    }
    const handle: { task: RenderTask | null; cancelled: boolean } = {
      task: null,
      cancelled: false,
    };
    const pageNo = Math.min(Math.max(page, 1), doc.numPages);
    void (async () => {
      try {
        const pdfPage = await doc.getPage(pageNo);
        if (handle.cancelled) {
          return;
        }
        const unscaled = pdfPage.getViewport({ scale: 1 });
        const cssWidth = Math.max(240, stage.clientWidth);
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = pdfPage.getViewport({
          scale: (cssWidth * pixelRatio) / unscaled.width,
        });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${Math.floor(viewport.height / pixelRatio)}px`;
        handle.task = pdfPage.render({ canvas, viewport });
        await handle.task.promise;
      } catch {
        if (!handle.cancelled) {
          setPdfError(true);
        }
      }
    })();
    return () => {
      handle.cancelled = true;
      handle.task?.cancel();
    };
  }, [active?.kind, doc, page]);

  function activate(id: string) {
    setActiveId(id);
    setSheetIndex(0);
    setShownRows(FIRST_ROWS);
    setPage(1);
    setPdfError(false);
  }

  async function ingest(list: FileList | readonly File[]) {
    const incoming = [...list];
    if (incoming.length === 0) {
      return;
    }
    setReading(true);
    setBanner("");
    const nextErrors: DeckError[] = [];
    const nextFiles: OpenFile[] = [];
    let room = MAX_OPEN - files.length;
    for (const file of incoming) {
      if (room <= 0) {
        setBanner(text.tooMany);
        break;
      }
      const result = await readUpload(file);
      if (!result.ok) {
        nextErrors.push({
          id: `${file.name}-${crypto.randomUUID()}`,
          name: result.name,
          reason: result.reason,
        });
        continue;
      }
      nextFiles.push(result.file);
      room -= 1;
    }
    setErrors((current) => [...nextErrors, ...current].slice(0, 8));
    if (nextFiles.length > 0) {
      setFiles((current) => [...nextFiles, ...current].slice(0, MAX_OPEN));
      const first = nextFiles[0];
      if (first) {
        activate(first.id);
      }
    }
    setReading(false);
  }

  function clearAll() {
    setFiles([]);
    setErrors([]);
    setActiveId(null);
    setBanner("");
    setDoc(null);
  }

  const header = sheet && sheet.rows.length > 1 ? sheet.rows[0] : null;
  const body = sheet ? (sheet.rows.length > 1 ? sheet.rows.slice(1) : sheet.rows) : [];
  const visibleBody = body.slice(0, shownRows);

  return (
    <section className="deck" id="files" aria-labelledby="files-title">
      <p className="deck-kicker">{text.deckKicker}</p>
      <h2 id="files-title">{text.deckTitle}</h2>
      <p className="deck-lede">{text.deckLede}</p>
      <div
        className={dragDepth > 0 ? "drop drop-hot" : "drop"}
        onDragEnter={(event) => {
          event.preventDefault();
          setDragDepth((depth) => depth + 1);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragDepth((depth) => Math.max(0, depth - 1));
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragDepth(0);
          void ingest(event.dataTransfer.files);
        }}
      >
        <p>{text.dropHint}</p>
        <ul className="exts" aria-hidden="true">
          <li>CSV</li>
          <li>XLS</li>
          <li>JSON</li>
          <li>PDF</li>
        </ul>
        <label className="file-btn">
          {text.browse}
          <input
            className="file-input"
            type="file"
            multiple
            accept=".csv,.xls,.xlsx,.json,.pdf,text/csv,application/json,application/pdf"
            onChange={(event) => {
              const picked = event.target.files;
              if (picked) {
                void ingest(picked);
              }
              event.target.value = "";
            }}
          />
        </label>
      </div>
      {reading ? <p className="reading">{text.reading}</p> : null}
      {banner ? (
        <p className="deck-error" role="alert">
          {banner}
        </p>
      ) : null}
      {errors.length > 0 ? (
        <ul className="deck-errors">
          {errors.map((error) => (
            <li key={error.id} role="alert">
              {fileErrorText(lang, error.name, error.reason)}
            </li>
          ))}
        </ul>
      ) : null}
      {files.length > 0 ? (
        <div className="file-bar">
          <div className="file-tabs" role="tablist" aria-label={text.openFiles}>
            {files.map((file) => (
              <button
                key={file.id}
                type="button"
                role="tab"
                aria-selected={file.id === activeId}
                onClick={() => activate(file.id)}
              >
                <span>{file.name}</span>
                <span className="kind">{file.kind}</span>
              </button>
            ))}
          </div>
          <button type="button" className="text-button" onClick={clearAll}>
            {text.clearFiles}
          </button>
        </div>
      ) : null}
      {active ? (
        <div className="viewer" role="tabpanel">
          <div className="viewer-head">
            <p>
              {active.name}
              {sheet && active.sheets.length > 1 ? ` · ${sheet.name}` : ""}
            </p>
            <button
              type="button"
              className="text-button"
              onClick={() => {
                setFiles((current) => current.filter((file) => file.id !== active.id));
                const rest = files.filter((file) => file.id !== active.id);
                const next = rest[0];
                if (next) {
                  activate(next.id);
                } else {
                  setActiveId(null);
                }
              }}
            >
              {text.removeFile(active.name)}
            </button>
          </div>
          {active.sheets.length > 1 ? (
            <div className="sheet-tabs" role="tablist" aria-label={text.sheetLabel}>
              {active.sheets.map((item, index) => (
                <button
                  key={`${active.id}-${item.name}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={index === sheetIndex}
                  onClick={() => {
                    setSheetIndex(index);
                    setShownRows(FIRST_ROWS);
                  }}
                >
                  {item.name || `${index + 1}`}
                </button>
              ))}
            </div>
          ) : null}
          {active.kind !== "pdf" && sheet && sheet.rows.length === 0 ? (
            <p className="empty-sheet">{text.emptySheet}</p>
          ) : null}
          {active.kind !== "pdf" && sheet && sheet.rows.length > 0 ? (
            <>
              {sheetClipped(sheet) ? <p className="clip">{text.clipped}</p> : null}
              <div className="grid-wrap">
                <table className="data-table">
                  <caption>
                    {active.name}
                    {sheet.name ? ` — ${sheet.name}` : ""}
                  </caption>
                  {header ? (
                    <thead>
                      <tr>
                        {header.map((cell, index) => (
                          <th key={`${index}-${cell}`} scope="col">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  ) : null}
                  <tbody>
                    {visibleBody.map((row, rowIndex) => (
                      <tr key={`${active.id}-${sheetIndex}-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {body.length > shownRows ? (
                <button
                  type="button"
                  className="more"
                  onClick={() => setShownRows((count) => count + ROW_STEP)}
                >
                  {text.showMore}
                </button>
              ) : null}
              {sheet.totalRows > sheet.rows.length ? (
                <p className="clip">
                  {text.rowLimit(sheet.rows.length, sheet.totalRows)}
                </p>
              ) : null}
            </>
          ) : null}
          {active.kind === "json" && active.jsonText ? (
            <details className="raw-json" open={active.sheets.length === 0}>
              <summary>{text.rawJson}</summary>
              <pre>{active.jsonText}</pre>
              {active.jsonCut ? <p className="clip">{text.clipped}</p> : null}
            </details>
          ) : null}
          {active.kind === "pdf" ? (
            <div className="pdf-stage" ref={stageRef}>
              {pdfError ? <p role="alert">{text.pdfFail}</p> : null}
              {!doc && !pdfError ? <p>{text.reading}</p> : null}
              <canvas ref={canvasRef} aria-label={`${active.name}, ${text.pageStatus(page, doc?.numPages ?? 1)}`} />
              <div className="pdf-bar">
                <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page <= 1}>
                  {text.prevPage}
                </button>
                <p>{doc ? text.pageStatus(page, doc.numPages) : "—"}</p>
                <button
                  type="button"
                  onClick={() => setPage((current) => current + 1)}
                  disabled={!doc || page >= doc.numPages}
                >
                  {text.nextPage}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default FileDeck;

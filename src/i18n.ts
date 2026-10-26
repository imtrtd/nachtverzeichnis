import type { ReadFailure } from "./readUpload.ts";
import type { Category, Lang, Localized } from "./types.ts";

export function pick(lang: Lang, text: Localized): string {
  switch (lang) {
    case "ru":
      return text.ru;
    case "de":
      return text.de;
    default: {
      const exhaustive: never = lang;
      return exhaustive;
    }
  }
}

export function categoryLabel(category: Category, lang: Lang): string {
  switch (category) {
    case "kink":
      return lang === "ru" ? "кинк" : "Kink";
    case "rave":
      return lang === "ru" ? "рейв" : "Rave";
    case "queer":
      return lang === "ru" ? "квир" : "Queer";
    case "club":
      return lang === "ru" ? "клуб" : "Club";
    case "festival":
      return lang === "ru" ? "фестиваль" : "Festival";
    case "other":
      return lang === "ru" ? "другое" : "Weiteres";
    default: {
      const exhaustive: never = category;
      return exhaustive;
    }
  }
}

export const categories: readonly Category[] = [
  "kink",
  "rave",
  "queer",
  "club",
  "festival",
  "other",
];

interface Copy {
  skip: string;
  kicker: string;
  title: string;
  lede: string;
  noticeTitle: string;
  noticeBody: string;
  noticeDismiss: string;
  langLabel: string;
  filters: string;
  city: string;
  allCities: string;
  nuremberg: string;
  categories: string;
  searchLabel: string;
  searchPlaceholder: string;
  reset: string;
  results: (count: number) => string;
  emptyTitle: string;
  emptyBody: string;
  noResultsTitle: string;
  noResultsBody: string;
  instagram: (name: string) => string;
  website: (name: string) => string;
  guest: string;
  footer: string;
  skipFiles: string;
  filesJump: string;
  deckKicker: string;
  deckTitle: string;
  deckLede: string;
  browse: string;
  dropHint: string;
  clearFiles: string;
  removeFile: (name: string) => string;
  sheetLabel: string;
  emptySheet: string;
  prevPage: string;
  nextPage: string;
  pageStatus: (page: number, total: number) => string;
  showMore: string;
  rowLimit: (shown: number, total: number) => string;
  clipped: string;
  rawJson: string;
  pdfFail: string;
  tooMany: string;
  reading: string;
  openFiles: string;
}

const ru: Copy = {
  skip: "К списку",
  kicker: "18+ · TECHNO / KINK / RAVE",
  title: "Ночной указатель",
  lede:
    "Публичные Instagram-аккаунты организаторов кинка, рейва, квир-ночей, клубов и фестивалей. Сначала Nürnberg. Хэндлы сверены по открытым сайтам и афишам, 25 октября 2026.",
  noticeTitle: "18+",
  noticeBody:
    "Справочник для взрослых. Кинк и фетиш здесь — информация о вечеринках 18+. Ссылки ведут на Instagram, сами кадры остаются там.",
  noticeDismiss: "Понятно",
  langLabel: "Язык",
  filters: "Фильтры",
  city: "Город",
  allCities: "Все города",
  nuremberg: "Nürnberg",
  categories: "Направление",
  searchLabel: "Поиск",
  searchPlaceholder: "Имя, город или @хэндл",
  reset: "Сбросить фильтры",
  results: (count) =>
    count === 1 ? "1 организация" : `${count} организаций`,
  emptyTitle: "Список пуст",
  emptyBody: "В данных пока нет ни одного аккаунта.",
  noResultsTitle: "Никого не нашлось",
  noResultsBody: "Снимите часть фильтров или поищите другое имя.",
  instagram: (name) => `Instagram — ${name}`,
  website: (name) => `Сайт — ${name}`,
  guest: "также играет в выбранном городе",
  footer:
    "Независимый справочник на 25 октября 2026. В списке только аккаунты, которые удалось сверить по открытым страницам. Площадки сами по себе этот список не ведут.",
  skipFiles: "К файлам",
  filesJump: "Файлы",
  deckKicker: "только в этом браузере",
  deckTitle: "Просмотр файлов",
  deckLede:
    "CSV, Excel, JSON и PDF открываются здесь и никуда не отправляются. На телефоне удобнее кнопка выбора, чем перетаскивание.",
  browse: "Выбрать файлы",
  dropHint: "CSV, XLS, XLSX, JSON или PDF",
  clearFiles: "Убрать все",
  removeFile: (name) => `Убрать ${name}`,
  sheetLabel: "Лист",
  emptySheet: "На листе нет строк.",
  prevPage: "Назад",
  nextPage: "Дальше",
  pageStatus: (current, total) => `Страница ${current} из ${total}`,
  showMore: "Показать ещё строки",
  rowLimit: (shown, total) => `В таблице ${shown} из ${total} строк.`,
  clipped: "Файл большой: показана только часть.",
  rawJson: "Исходный JSON",
  pdfFail: "PDF не открылся. Файл повреждён или защищён.",
  tooMany: "Одновременно можно открыть шесть файлов. Уберите один и добавьте следующий.",
  reading: "Читаю файл…",
  openFiles: "Открытые файлы",
};

const de: Copy = {
  skip: "Zur Liste",
  kicker: "18+ · TECHNO / KINK / RAVE",
  title: "Nachtverzeichnis",
  lede:
    "Öffentliche Instagram-Accounts von Veranstalter*innen für Kink, Rave, queere Nächte, Clubs und Festivals. Zuerst Nürnberg. Handles geprüft anhand öffentlicher Seiten, 25. Oktober 2026.",
  noticeTitle: "18+",
  noticeBody:
    "Ein Verzeichnis für Erwachsene. Kink und Fetisch stehen hier nur als Hinweis auf Partys ab 18. Instagram-Bilder werden nicht eingebettet — nur verlinkt.",
  noticeDismiss: "Verstanden",
  langLabel: "Sprache",
  filters: "Filter",
  city: "Stadt",
  allCities: "Alle Städte",
  nuremberg: "Nürnberg",
  categories: "Richtung",
  searchLabel: "Suche",
  searchPlaceholder: "Name, Stadt oder @Handle",
  reset: "Filter zurücksetzen",
  results: (count) => (count === 1 ? "1 Organisation" : `${count} Organisationen`),
  emptyTitle: "Die Liste ist leer",
  emptyBody: "In den Daten steht noch kein Account.",
  noResultsTitle: "Keine Treffer",
  noResultsBody: "Nimm einen Filter weg oder such nach einem anderen Namen.",
  instagram: (name) => `Instagram — ${name}`,
  website: (name) => `Website — ${name}`,
  guest: "spielt auch in der gewählten Stadt",
  footer:
    "Unabhängiges Verzeichnis, Stand 25. Oktober 2026. Aufgenommen sind nur Accounts, die sich über öffentliche Seiten prüfen ließen. Die Häuser führen diese Liste nicht.",
  skipFiles: "Zu den Dateien",
  filesJump: "Dateien",
  deckKicker: "nur in diesem Browser",
  deckTitle: "Dateiansicht",
  deckLede:
    "CSV, Excel, JSON und PDF bleiben in diesem Browser und werden nicht hochgeladen. Auf dem Handy ist die Auswahl-Schaltfläche verlässlicher als Ziehen.",
  browse: "Dateien wählen",
  dropHint: "CSV, XLS, XLSX, JSON oder PDF",
  clearFiles: "Alle entfernen",
  removeFile: (name) => `${name} entfernen`,
  sheetLabel: "Blatt",
  emptySheet: "Das Blatt hat keine Zeilen.",
  prevPage: "Zurück",
  nextPage: "Weiter",
  pageStatus: (current, total) => `Seite ${current} von ${total}`,
  showMore: "Weitere Zeilen",
  rowLimit: (shown, total) => `${shown} von ${total} Zeilen in der Tabelle.`,
  clipped: "Die Datei ist groß: es ist nur ein Teil zu sehen.",
  rawJson: "Rohes JSON",
  pdfFail: "Das PDF ließ sich nicht öffnen. Die Datei ist beschädigt oder geschützt.",
  tooMany: "Gleichzeitig passen sechs Dateien. Entferne eine, dann die nächste.",
  reading: "Datei wird gelesen…",
  openFiles: "Geöffnete Dateien",
};

export function fileErrorText(lang: Lang, name: string, reason: ReadFailure): string {
  switch (reason) {
    case "type":
      return lang === "ru"
        ? `«${name}» — нужен файл CSV, XLS, XLSX, JSON или PDF.`
        : `„${name}“ — nur CSV, XLS, XLSX, JSON oder PDF.`;
    case "size":
      return lang === "ru"
        ? `«${name}» больше 12 МБ.`
        : `„${name}“ ist größer als 12 MB.`;
    case "parse":
      return lang === "ru"
        ? `«${name}» не удалось прочитать.`
        : `„${name}“ ließ sich nicht lesen.`;
    case "empty":
      return lang === "ru" ? `«${name}» пустой.` : `„${name}“ ist leer.`;
    default: {
      const exhaustive: never = reason;
      return exhaustive;
    }
  }
}

export function copy(lang: Lang): Copy {
  switch (lang) {
    case "ru":
      return ru;
    case "de":
      return de;
    default: {
      const exhaustive: never = lang;
      return exhaustive;
    }
  }
}

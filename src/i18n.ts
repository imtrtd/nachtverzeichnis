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
}

const ru: Copy = {
  skip: "К списку",
  kicker: "18+ · справочник ночи",
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
};

const de: Copy = {
  skip: "Zur Liste",
  kicker: "18+ · Nachtverzeichnis",
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
};

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

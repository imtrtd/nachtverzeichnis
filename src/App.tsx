import { useEffect, useMemo, useState } from "react";
import { accounts } from "./data/accounts.ts";
import { categories, categoryLabel, copy, pick } from "./i18n.ts";
import type { Account, Category, Lang } from "./types.ts";

const LANG_KEY = "nachtverzeichnis-lang";
const NOTICE_KEY = "nachtverzeichnis-notice";

function readLang(): Lang {
  try {
    return window.localStorage.getItem(LANG_KEY) === "de" ? "de" : "ru";
  } catch {
    return "ru";
  }
}

function readNoticeClosed(): boolean {
  try {
    return window.localStorage.getItem(NOTICE_KEY) === "closed";
  } catch {
    return false;
  }
}

function loose(value: string): string {
  const lower = value.toLocaleLowerCase("de");
  const expanded = lower
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
  const simple = lower
    .replaceAll("ä", "a")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u")
    .replaceAll("ß", "ss");
  return `${lower} ${expanded} ${simple}`;
}

function noteText(account: Account): string {
  if (!account.areaNote) {
    return "";
  }
  return `${account.areaNote.ru} ${account.areaNote.de}`;
}

function matchesCity(account: Account, city: string): boolean {
  if (city === "all") {
    return true;
  }
  return account.city === city || noteText(account).includes(city);
}

function matchesQuery(account: Account, query: string): boolean {
  const needle = query.trim().toLocaleLowerCase("de");
  if (needle === "") {
    return true;
  }
  const hay = loose(
    [
      account.name,
      account.city,
      account.instagram,
      account.description.ru,
      account.description.de,
      account.areaNote?.ru ?? "",
      account.areaNote?.de ?? "",
      account.categories.join(" "),
    ].join(" "),
  );
  return hay.includes(needle);
}

function sortAccounts(list: readonly Account[], city: string): Account[] {
  return [...list].sort((a, b) => {
    const rank = (account: Account): number => {
      if (city !== "all" && account.city === city) {
        return 0;
      }
      if (account.city === "Nürnberg") {
        return 1;
      }
      return 2;
    };
    const byRank = rank(a) - rank(b);
    if (byRank !== 0) {
      return byRank;
    }
    const byCity = a.city.localeCompare(b.city, "de");
    if (byCity !== 0) {
      return byCity;
    }
    return a.name.localeCompare(b.name, "de");
  });
}

function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const [noticeOpen, setNoticeOpen] = useState(() => !readNoticeClosed());
  const [city, setCity] = useState("Nürnberg");
  const [selected, setSelected] = useState<readonly Category[]>([]);
  const [query, setQuery] = useState("");
  const text = copy(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "ru" ? "Ночной указатель · Nürnberg" : "Nachtverzeichnis · Nürnberg";
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  }, [lang]);

  const cities = useMemo(() => {
    const names = new Set(accounts.map((account) => account.city));
    const rest = [...names].filter((name) => name !== "Nürnberg");
    rest.sort((a, b) => a.localeCompare(b, "de"));
    return ["Nürnberg", ...rest];
  }, []);

  const visible = useMemo(() => {
    const filtered = accounts.filter((account) => {
      if (!matchesCity(account, city)) {
        return false;
      }
      if (selected.length > 0 && !account.categories.some((item) => selected.includes(item))) {
        return false;
      }
      return matchesQuery(account, query);
    });
    return sortAccounts(filtered, city);
  }, [city, query, selected]);

  function toggleCategory(category: Category) {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  function resetFilters() {
    setCity("Nürnberg");
    setSelected([]);
    setQuery("");
  }

  function dismissNotice() {
    setNoticeOpen(false);
    try {
      window.localStorage.setItem(NOTICE_KEY, "closed");
    } catch {
      /* the banner stays closed until reload if storage is unavailable */
    }
  }

  return (
    <>
      <a className="skip" href="#directory">
        {text.skip}
      </a>
      <header className="mast">
        <div className="mast-top">
          <p className="kicker">{text.kicker}</p>
          <div className="lang" role="group" aria-label={text.langLabel}>
            <button
              type="button"
              aria-pressed={lang === "ru"}
              onClick={() => setLang("ru")}
            >
              RU
            </button>
            <button
              type="button"
              aria-pressed={lang === "de"}
              onClick={() => setLang("de")}
            >
              DE
            </button>
          </div>
        </div>
        <h1>
          <span className="title">{text.title}</span>
          <span className="city-word">Nürnberg</span>
        </h1>
        <p className="lede">{text.lede}</p>
        <svg className="river" viewBox="0 0 800 28" aria-hidden="true">
          <path d="M0 18 C80 4 140 26 220 14 C300 2 360 24 460 12 C540 2 620 22 800 8" />
        </svg>
      </header>

      {noticeOpen ? (
        <aside className="notice" aria-label={text.noticeTitle}>
          <p className="notice-mark">{text.noticeTitle}</p>
          <p>{text.noticeBody}</p>
          <button type="button" onClick={dismissNotice}>
            {text.noticeDismiss}
          </button>
        </aside>
      ) : null}

      <div className="layout">
        <form
          className="filters"
          role="search"
          aria-label={text.filters}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="filter-block">
            <label htmlFor="city-select">{text.city}</label>
            <div className="city-quick">
              <button
                type="button"
                className="chip chip-feature"
                aria-pressed={city === "Nürnberg"}
                onClick={() => setCity("Nürnberg")}
              >
                {text.nuremberg}
              </button>
              <button
                type="button"
                className="chip"
                aria-pressed={city === "all"}
                onClick={() => setCity("all")}
              >
                {text.allCities}
              </button>
            </div>
            <select
              id="city-select"
              value={cities.includes(city) ? city : "all"}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="all">{text.allCities}</option>
              {cities.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="filter-block">
            <legend>{text.categories}</legend>
            <div className="chips">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="chip"
                  aria-pressed={selected.includes(category)}
                  onClick={() => toggleCategory(category)}
                >
                  {categoryLabel(category, lang)}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="filter-block">
            <label htmlFor="q">{text.searchLabel}</label>
            <input
              id="q"
              type="search"
              value={query}
              placeholder={text.searchPlaceholder}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
          </div>

          <button type="button" className="text-button" onClick={resetFilters}>
            {text.reset}
          </button>
        </form>

        <main id="directory">
          <p className="count" aria-live="polite">
            {text.results(visible.length)}
          </p>
          {accounts.length === 0 ? (
            <div className="state">
              <h2>{text.emptyTitle}</h2>
              <p>{text.emptyBody}</p>
            </div>
          ) : null}
          {accounts.length > 0 && visible.length === 0 ? (
            <div className="state">
              <h2>{text.noResultsTitle}</h2>
              <p>{text.noResultsBody}</p>
              <button type="button" onClick={resetFilters}>
                {text.reset}
              </button>
            </div>
          ) : null}
          <ol className="list">
            {visible.map((account, index) => {
              const guest = city !== "all" && account.city !== city;
              return (
                <li key={account.id} className={account.city === "Nürnberg" ? "local" : ""}>
                  <span className="index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <article>
                    <header className="entry-head">
                      <h2>{account.name}</h2>
                      <p className="where">
                        {account.city}
                        <span className="handle">@{account.instagram}</span>
                      </p>
                    </header>
                    <ul className="cats">
                      {account.categories.map((category) => (
                        <li key={category}>{categoryLabel(category, lang)}</li>
                      ))}
                    </ul>
                    <p className="desc">{pick(lang, account.description)}</p>
                    {account.areaNote ? (
                      <p className="note">{pick(lang, account.areaNote)}</p>
                    ) : null}
                    {guest ? <p className="guest">{text.guest}</p> : null}
                    <p className="links">
                      <a
                        href={`https://www.instagram.com/${account.instagram}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {text.instagram(account.name)}
                      </a>
                      {account.website ? (
                        <a href={account.website} target="_blank" rel="noopener noreferrer">
                          {text.website(account.name)}
                        </a>
                      ) : null}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </main>
      </div>
      <footer>
        <p>{text.footer}</p>
      </footer>
    </>
  );
}

export default App;

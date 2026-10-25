import type { Account, Category } from "../types.ts";

const kink: Category = "kink";
const rave: Category = "rave";
const queer: Category = "queer";
const club: Category = "club";
const festival: Category = "festival";
const other: Category = "other";

export const accounts: readonly Account[] = [
  {
    id: "die-rakete",
    name: "Die Rakete",
    city: "Nürnberg",
    categories: [rave, club],
    instagram: "dierakete64",
    website: "https://dierakete.com/",
    description: {
      ru: "Электронный клуб в Зюдштадте: на сайте его называют жемчужиной юга.",
      de: "Elektronischer Club in der Südstadt, auf der eigenen Seite die Perle des Südens.",
    },
  },
  {
    id: "haus-33",
    name: "Haus 33",
    city: "Nürnberg",
    categories: [rave, club],
    instagram: "haus33.club",
    website: "https://haus33.club/",
    description: {
      ru: "Техно-клуб на Engelhardsgasse с лейблом и букинг-агентством.",
      de: "Techno-Club in der Engelhardsgasse, dazu Label und Booking.",
    },
  },
  {
    id: "der-hirsch",
    name: "Der Hirsch",
    city: "Nürnberg",
    categories: [club, queer, rave],
    instagram: "hirschnbg",
    website: "https://www.der-hirsch.com/",
    description: {
      ru: "Альтернативный клуб у Rakete: живая музыка, электронный цикл Elektrisch и квир-вечеринка Rosa Hirsch.",
      de: "Alternativer Club neben der Rakete: Live-Musik, die elektronische Reihe Elektrisch und die queere Party Rosa Hirsch.",
    },
  },
  {
    id: "z-bau",
    name: "Z-Bau",
    city: "Nürnberg",
    categories: [club, other],
    instagram: "z.bau",
    website: "https://z-bau.com/",
    description: {
      ru: "Дом современной культуры на Frankenstraße: концерты, вечеринки, чтения.",
      de: "Haus für Gegenwartskultur an der Frankenstraße: Konzerte, Partys, Lesungen.",
    },
  },
  {
    id: "club-stereo",
    name: "Club Stereo",
    city: "Nürnberg",
    categories: [club],
    instagram: "stereonuernberg",
    website: "https://club-stereo.net/",
    description: {
      ru: "Небольшой зал живой музыки и танцев в городе.",
      de: "Kleiner Live-Club und Tanzsaal in der Stadt.",
    },
  },
  {
    id: "electronic-liebe",
    name: "Electronic Liebe",
    city: "Nürnberg",
    categories: [rave],
    instagram: "electronicliebe",
    website: "https://www.electronicliebe.com/",
    description: {
      ru: "Местное сообщество электронной музыки, вечеринки проходят в том числе в Z-Bau.",
      de: "Lokale Community für elektronische Musik, mit Nächten unter anderem im Z-Bau.",
    },
  },
  {
    id: "csd-nuernberg",
    name: "CSD Nürnberg Pride",
    city: "Nürnberg",
    categories: [queer, festival],
    instagram: "csdnuernberg",
    website: "https://www.csd-nuernberg.de/",
    description: {
      ru: "Прайд города: недели программы, демонстрация и вечеринки Förderverein CSD Nürnberg.",
      de: "Pride der Stadt: Programmwochen, Demonstration und Partys des Fördervereins CSD Nürnberg.",
    },
  },
  {
    id: "subcultura",
    name: "Subcultura",
    city: "Nürnberg",
    categories: [kink, club, queer, rave],
    instagram: "subcultura_nbg",
    website: "https://werk68.de/",
    areaNote: {
      ru: "Бывший Werk68. Весной 2026 площадка объявила перезапуск под именем Subcultura.",
      de: "Ehemals Werk68. Im Frühjahr 2026 kündigte der Ort den Neustart als Subcultura an.",
    },
    description: {
      ru: "Клуб для техно, дарквейва и кинк-ночей, с явной ставкой на квир-гостей и согласие.",
      de: "Club für Techno, Dark Wave und Kink-Nächte, mit klarer Ansage an queere Gäste und Konsens.",
    },
  },
  {
    id: "musikzentrale",
    name: "Musikzentrale",
    city: "Nürnberg",
    categories: [club, other],
    instagram: "musikzentrale_nuernberg",
    website: "https://www.musikzentrale.com/",
    description: {
      ru: "MUZclub на Fürther Straße: электро, панк, рок и местная сцена.",
      de: "MUZclub in der Fürther Straße: Elektro, Punk, Rock und die lokale Szene.",
    },
  },
  {
    id: "tafelhalle",
    name: "Tafelhalle",
    city: "Nürnberg",
    categories: [other, festival],
    instagram: "tafelhalle",
    website: "https://www.kunstkulturquartier.de/tafelhalle",
    description: {
      ru: "Площадка свободной сцены в KunstKulturQuartier: музыка, танец, театр, фестивали.",
      de: "Bühne der freien Szene im KunstKulturQuartier: Musik, Tanz, Theater, Festivals.",
    },
  },
  {
    id: "nuejazz",
    name: "NUEJAZZ",
    city: "Nürnberg",
    categories: [festival, other],
    instagram: "nuejazz",
    website: "https://www.nuejazz.de/",
    description: {
      ru: "Городской джазовый фестиваль с концертами по разным залам.",
      de: "Städtisches Jazzfestival mit Konzerten an mehreren Orten.",
    },
  },
  {
    id: "space-between",
    name: "Space Between",
    city: "Nürnberg",
    categories: [club, other],
    instagram: "sb.spacebetween",
    areaNote: {
      ru: "Steinbühler Tunnel. Хэндл указан в материале curt о повторном открытии.",
      de: "Steinbühler Tunnel. Den Handle nennt curt im Text zur Wiedereröffnung.",
    },
    description: {
      ru: "Экспериментальное место: выставки, концерты и клубные ночи.",
      de: "Experimenteller Ort für Ausstellungen, Konzerte und Clubnächte.",
    },
  },
  {
    id: "kinky-on",
    name: "KINKY ON",
    city: "Halle (Saale)",
    categories: [kink, rave, club],
    instagram: "kinky_on_tour",
    website: "https://www.kinky-on.com/",
    areaNote: {
      ru: "Юридический адрес в Halle (Saale). Регулярные даты в Nürnberg (Die Rakete), Leipzig и Berlin.",
      de: "Sitz in Halle (Saale). Regelmäßige Termine in Nürnberg (Die Rakete), Leipzig und Berlin.",
    },
    description: {
      ru: "Секс-позитивный тур с дресс-кодом: кинк, фетиш и клубная музыка.",
      de: "Sexpositiver Tour-Abend mit Dresscode: Kink, Fetisch und Clubmusik.",
    },
  },
  {
    id: "blitz",
    name: "Blitz",
    city: "München",
    categories: [rave, club],
    instagram: "blitz_music_club",
    website: "https://www.blitz.club/",
    description: {
      ru: "Мюнхенский клуб с точным звуком и длинными электронными ночами.",
      de: "Münchner Club mit präzisem Sound und langen elektronischen Nächten.",
    },
  },
  {
    id: "rote-sonne",
    name: "Rote Sonne",
    city: "München",
    categories: [rave, club],
    instagram: "clubrotesonne",
    website: "https://www.rote-sonne.com/",
    description: {
      ru: "Клуб на Maximiliansplatz: техно, концерты и гостевые ночи.",
      de: "Club am Maximiliansplatz: Techno, Konzerte und Gastnächte.",
    },
  },
  {
    id: "harry-klein",
    name: "Harry Klein",
    city: "München",
    categories: [rave, queer, club],
    instagram: "harrykleinclub",
    website: "https://harrykleinclub.de/",
    areaNote: {
      ru: "Свежие даты на сайте объявлены в Rote Sonne.",
      de: "Aktuelle Termine auf der Seite sind in der Rote Sonne angekündigt.",
    },
    description: {
      ru: "Квир-ночи техно и хауса, на сайте они идут как Garry Klein.",
      de: "Queere Techno- und House-Nächte, auf der Seite als Garry Klein angekündigt.",
    },
  },
  {
    id: "bahnwaerter-thiel",
    name: "Bahnwärter Thiel",
    city: "München",
    categories: [rave, club, other],
    instagram: "bahnwaerterthiel",
    website: "https://www.bahnwaerterthiel.de/",
    description: {
      ru: "Культурный двор и клубные ночи на бывшей железнодорожной площадке.",
      de: "Kulturhof und Clubnächte auf einem ehemaligen Bahngelände.",
    },
  },
  {
    id: "muffatwerk",
    name: "Muffatwerk",
    city: "München",
    categories: [other, club],
    instagram: "muffatwerk",
    website: "https://www.muffatwerk.de/",
    description: {
      ru: "Международный дом культуры на Изаре: концерты, театр и вечеринки.",
      de: "Internationales Kulturhaus an der Isar: Konzerte, Theater und Partys.",
    },
  },
  {
    id: "neuraum",
    name: "neuraum",
    city: "München",
    categories: [rave, club],
    instagram: "neuraum_munich",
    website: "https://neuraum.de/",
    description: {
      ru: "Ночной клуб, который сам представляется друзьям ночи.",
      de: "Nachtclub, der sich selbst für Freunde der Nacht nennt.",
    },
  },
  {
    id: "pimpernel",
    name: "Pimpernel",
    city: "München",
    categories: [club],
    instagram: "pimpernel_1970",
    website: "https://pimpernel.de/",
    description: {
      ru: "Дискотека с 1970 года, всё ещё со своей танцплощадкой.",
      de: "Diskothek seit 1970, weiter mit eigener Tanzfläche.",
    },
  },
  {
    id: "stbg",
    name: "STBG Party",
    city: "München",
    categories: [queer, club],
    instagram: "stbg.party",
    website: "https://stbg-party.com/",
    areaNote: {
      ru: "Юридический адрес в München. В Nürnberg серия известна как Queer Jungle.",
      de: "Sitz in München. In Nürnberg läuft die Reihe als Queer Jungle.",
    },
    description: {
      ru: "Баварская серия квир-вечеринок Sweet To Be Gay.",
      de: "Bayerische Reihe queerer Partys, Sweet To Be Gay.",
    },
  },
  {
    id: "bootshaus",
    name: "Bootshaus",
    city: "Köln",
    categories: [rave, club],
    instagram: "bootshaus",
    website: "https://bootshaus.tv/",
    description: {
      ru: "Большой электронный клуб Кёльна у Рейна.",
      de: "Großer elektronischer Club in Köln am Rhein.",
    },
  },
  {
    id: "odonien",
    name: "Odonien",
    city: "Köln",
    categories: [rave, club, other],
    instagram: "odonien",
    website: "https://odonien.de/",
    description: {
      ru: "Открытая культурная площадка с клубными ночами и летней жизнью.",
      de: "Offenes Kulturareal mit Clubnächten und Sommerleben.",
    },
  },
  {
    id: "helios37",
    name: "Helios37",
    city: "Köln",
    categories: [rave, club],
    instagram: "helios.37",
    website: "https://www.helios37.de/",
    description: {
      ru: "Техно-клуб в Ehrenfeld.",
      de: "Techno-Club in Ehrenfeld.",
    },
  },
  {
    id: "gloria",
    name: "Gloria",
    city: "Köln",
    categories: [club, other],
    instagram: "gloria_koeln",
    website: "https://gloria.koeln/",
    description: {
      ru: "Зал на Apostelnstraße: концерты, театр, комедия и вечеринки.",
      de: "Haus an der Apostelnstraße: Konzerte, Theater, Comedy und Partys.",
    },
  },
  {
    id: "stadtgarten",
    name: "Stadtgarten",
    city: "Köln",
    categories: [other, club],
    instagram: "stadtgarten_koeln",
    website: "https://www.stadtgarten.de/",
    description: {
      ru: "Культурный дом с концертами и клубной программой, рядом живёт Jaki.",
      de: "Kulturhaus mit Konzerten und Clubprogramm, daneben spielt das Jaki.",
    },
  },
  {
    id: "jaki",
    name: "Jaki",
    city: "Köln",
    categories: [rave, club],
    instagram: "jaki.klub",
    areaNote: {
      ru: "Клуб в комплексе Stadtgarten. Хэндл стоит на сайте Stadtgarten.",
      de: "Club im Stadtgarten. Der Handle steht auf der Stadtgarten-Seite.",
    },
    description: {
      ru: "Клубная комната Stadtgarten для электронных ночей.",
      de: "Clubraum des Stadtgartens für elektronische Nächte.",
    },
  },
  {
    id: "cbe",
    name: "Club Bahnhof Ehrenfeld",
    city: "Köln",
    categories: [rave, club],
    instagram: "cbe_cologne",
    website: "https://www.clubbahnhofehrenfeld.de/",
    description: {
      ru: "Клуб у вокзала Ehrenfeld.",
      de: "Club am Bahnhof Ehrenfeld.",
    },
  },
  {
    id: "live-music-hall",
    name: "Live Music Hall",
    city: "Köln",
    categories: [club, other],
    instagram: "livemusichall_cologne",
    website: "https://www.livemusichall.de/",
    description: {
      ru: "Зал живой музыки и клубных вечеров.",
      de: "Halle für Livemusik und Clubabende.",
    },
  },
  {
    id: "bumann",
    name: "Bumann & Sohn",
    city: "Köln",
    categories: [club],
    instagram: "bumannundsohn",
    website: "https://www.bumannundsohn.de/",
    description: {
      ru: "Клуб-бар в Ehrenfeld с концертами и поздними часами по выходным.",
      de: "Klubbar in Ehrenfeld mit Konzerten und langen Wochenendzeiten.",
    },
  },
  {
    id: "uebel",
    name: "Uebel & Gefährlich",
    city: "Hamburg",
    categories: [rave, club],
    instagram: "uebel_und_gefaehrlich",
    website: "https://www.uebelundgefaehrlich.com/",
    description: {
      ru: "Клуб в зенитной башне на Feldstraße.",
      de: "Club im Flakturm an der Feldstraße.",
    },
  },
  {
    id: "molotow",
    name: "Molotow",
    city: "Hamburg",
    categories: [club, other],
    instagram: "molotowclub",
    website: "https://molotowclub.com/",
    description: {
      ru: "Лайв-клуб на St. Pauli.",
      de: "Live-Club auf St. Pauli.",
    },
  },
  {
    id: "mojo",
    name: "Mojo Club",
    city: "Hamburg",
    categories: [rave, club],
    instagram: "mojo_club",
    website: "https://www.mojo.de/",
    description: {
      ru: "Электронный клуб в Гамбурге.",
      de: "Elektronischer Club in Hamburg.",
    },
  },
  {
    id: "knust",
    name: "Knust",
    city: "Hamburg",
    categories: [club],
    instagram: "knusthamburg",
    website: "https://knusthamburg.de/",
    description: {
      ru: "Лайв-клуб в бывшей бойне на Neuer Kamp.",
      de: "Live-Club in der ehemaligen Rinderschlachthalle am Neuen Kamp.",
    },
  },
  {
    id: "docks",
    name: "Docks",
    city: "Hamburg",
    categories: [club],
    instagram: "docksprinzenbar",
    website: "https://www.docks.de/",
    areaNote: {
      ru: "Аккаунт общий с Prinzenbar на Reeperbahn.",
      de: "Der Account gehört zu Docks und Prinzenbar auf der Reeperbahn.",
    },
    description: {
      ru: "Клуб на Reeperbahn.",
      de: "Club auf der Reeperbahn.",
    },
  },
  {
    id: "grosse-freiheit-36",
    name: "Große Freiheit 36",
    city: "Hamburg",
    categories: [club, other],
    instagram: "grossefreiheit36",
    website: "https://grossefreiheit36.de/",
    description: {
      ru: "Концертный клуб на Große Freiheit, St. Pauli.",
      de: "Konzertclub auf der Großen Freiheit, St. Pauli.",
    },
  },
  {
    id: "reeperbahn-festival",
    name: "Reeperbahn Festival",
    city: "Hamburg",
    categories: [festival],
    instagram: "reeperbahn_festival",
    website: "https://www.reeperbahnfestival.com/",
    description: {
      ru: "Музыкальный фестиваль по клубам и залам St. Pauli.",
      de: "Musikfestival durch Clubs und Säle auf St. Pauli.",
    },
  },
  {
    id: "dockville",
    name: "MS Dockville",
    city: "Hamburg",
    categories: [festival, other],
    instagram: "dockville",
    website: "https://msdockville.de/",
    description: {
      ru: "Фестиваль музыки и искусства в Гамбурге.",
      de: "Festival für Musik und Kunst in Hamburg.",
    },
  },
  {
    id: "robert-johnson",
    name: "Robert Johnson",
    city: "Offenbach am Main",
    categories: [rave, club],
    instagram: "robertjohnsonclub",
    website: "https://www.robert-johnson.de/",
    areaNote: {
      ru: "У Майна, рядом с Frankfurt am Main.",
      de: "Am Main, neben Frankfurt am Main.",
    },
    description: {
      ru: "Небольшой клуб с длинной историей хауса и техно.",
      de: "Kleiner Club mit langer Geschichte in House und Techno.",
    },
  },
  {
    id: "tanzhaus-west",
    name: "Tanzhaus West",
    city: "Frankfurt am Main",
    categories: [rave, club],
    instagram: "tanzhaus.west",
    website: "https://tanzhaus-west.de/",
    description: {
      ru: "Франкфуртский клуб электронной музыки.",
      de: "Frankfurter Club für elektronische Musik.",
    },
  },
  {
    id: "csd-frankfurt",
    name: "CSD Frankfurt",
    city: "Frankfurt am Main",
    categories: [queer, festival],
    instagram: "csdfrankfurt",
    website: "https://csd-frankfurt.de/",
    description: {
      ru: "Прайд Франкфурта, объединение CSD Frankfurt e.V.",
      de: "Pride in Frankfurt, getragen vom CSD Frankfurt e.V.",
    },
  },
  {
    id: "batschkapp",
    name: "Batschkapp",
    city: "Frankfurt am Main",
    categories: [club, other],
    instagram: "batschkappfrankfurt",
    website: "https://www.batschkapp.net/",
    description: {
      ru: "Концертная площадка и клуб во Франкфурте.",
      de: "Konzertort und Club in Frankfurt.",
    },
  },
  {
    id: "mousonturm",
    name: "Mousonturm",
    city: "Frankfurt am Main",
    categories: [other],
    instagram: "mousonturm",
    website: "https://www.mousonturm.de/",
    description: {
      ru: "Дом художников: театр, перформанс и гостевые вечера.",
      de: "Künstler*innenhaus für Theater, Performance und Gastabende.",
    },
  },
  {
    id: "elipamanoke",
    name: "elipamanoke",
    city: "Leipzig",
    categories: [rave, club],
    instagram: "elipamanoke",
    website: "https://elipamanoke.de/",
    description: {
      ru: "Техно-клуб с девизом «rave hard, be nice» и жёстким запретом дискриминации.",
      de: "Techno-Club mit dem Satz „rave hard, be nice“ und klarem Diskriminierungsverbot.",
    },
  },
  {
    id: "csd-leipzig",
    name: "CSD Leipzig",
    city: "Leipzig",
    categories: [queer, festival],
    instagram: "csdleipzig",
    website: "https://csd-leipzig.de/",
    description: {
      ru: "Прайд Лейпцига.",
      de: "Pride in Leipzig.",
    },
  },
  {
    id: "moritzbastei",
    name: "Moritzbastei",
    city: "Leipzig",
    categories: [club, other],
    instagram: "moritzbastei",
    website: "https://www.moritzbastei.de/",
    description: {
      ru: "Культурный бастион в центре: концерты, вечеринки и разговорные вечера.",
      de: "Kulturbastion in der Innenstadt: Konzerte, Partys und Gesprächsabende.",
    },
  },
  {
    id: "distillery",
    name: "Distillery",
    city: "Leipzig",
    categories: [rave, club],
    instagram: "distillery_leipzig",
    website: "https://www.distillery.de/",
    areaNote: {
      ru: "Хэндл указан в открытых справочниках площадки. Сайт в день сверки отвечал ошибкой.",
      de: "Den Handle nennen öffentliche Verzeichnisse des Clubs. Die Website antwortete am Prüftag mit einem Fehler.",
    },
    description: {
      ru: "Лейпцигский танцевальный клуб, в 2025 году объявлял переезд и новое открытие.",
      de: "Leipziger Tanzclub, 2025 mit Umzug und Wiedereröffnung angekündigt.",
    },
  },
  {
    id: "sektor-evolution",
    name: "Sektor Evolution",
    city: "Dresden",
    categories: [rave, club],
    instagram: "sektor_evolution",
    website: "https://www.sektor-evolution.de/",
    description: {
      ru: "Дрезденский клуб электронной музыки.",
      de: "Dresdner Club für elektronische Musik.",
    },
  },
  {
    id: "beatpol",
    name: "Beatpol",
    city: "Dresden",
    categories: [club, other],
    instagram: "beatpol_dresden",
    website: "https://beatpol.de/",
    description: {
      ru: "Площадка для концертов и клубных вечеров.",
      de: "Ort für Konzerte und Clubabende.",
    },
  },
  {
    id: "csd-dresden",
    name: "CSD Dresden",
    city: "Dresden",
    categories: [queer, festival],
    instagram: "csddresden",
    website: "https://csd-dresden.de/",
    description: {
      ru: "Прайд Дрездена, CSD Dresden e.V.",
      de: "Pride in Dresden, CSD Dresden e.V.",
    },
  },
  {
    id: "im-wizemann",
    name: "Im Wizemann",
    city: "Stuttgart",
    categories: [club, other],
    instagram: "imwizemann",
    website: "https://www.imwizemann.de/",
    description: {
      ru: "Концертный зал и гастрономия в Штутгарте.",
      de: "Konzertort und Gastronomie in Stuttgart.",
    },
  },
  {
    id: "perkins-park",
    name: "Perkins Park",
    city: "Stuttgart",
    categories: [club, rave],
    instagram: "perkins_park",
    website: "https://perkins-park.de/",
    description: {
      ru: "Штутгартский клуб с танцевальной программой.",
      de: "Stuttgarter Club mit Tanzprogramm.",
    },
  },
  {
    id: "stuttgart-pride",
    name: "Stuttgart Pride",
    city: "Stuttgart",
    categories: [queer, festival],
    instagram: "stuttgartpride",
    website: "https://www.stuttgart-pride.de/",
    description: {
      ru: "Прайд Штутгарта, CSD города.",
      de: "Pride in Stuttgart, der CSD der Stadt.",
    },
  },
  {
    id: "kitkat",
    name: "KitKatClub",
    city: "Berlin",
    categories: [kink, club, rave],
    instagram: "kitkatclub.official",
    website: "https://www.kitkatclub.org/",
    description: {
      ru: "Берлинский клуб с дресс-кодом: техно-ночи и фетиш в одном доме.",
      de: "Berliner Club mit Dresscode: Techno-Nächte und Fetisch im selben Haus.",
    },
  },
  {
    id: "tresor",
    name: "Tresor",
    city: "Berlin",
    categories: [rave, club],
    instagram: "tresorberlin",
    website: "https://tresorberlin.com/",
    description: {
      ru: "Техно-клуб и лейбл с долгой берлинской историей.",
      de: "Techno-Club und Label mit langer Berliner Geschichte.",
    },
  },
  {
    id: "kater",
    name: "Kater",
    city: "Berlin",
    categories: [rave, club],
    instagram: "kater.berlin",
    website: "https://www.katerclub.de/",
    description: {
      ru: "Клуб у реки с длинными электронными ночами.",
      de: "Club am Fluss mit langen elektronischen Nächten.",
    },
  },
  {
    id: "renate",
    name: "Renate",
    city: "Berlin",
    categories: [rave, club],
    instagram: "renate.berlin",
    website: "https://www.renate.cc/",
    description: {
      ru: "Клуб в бывшем жилом доме, электронная программа до утра.",
      de: "Club in einem ehemaligen Wohnhaus, elektronisches Programm bis in den Morgen.",
    },
  },
  {
    id: "ohm",
    name: "OHM",
    city: "Berlin",
    categories: [rave, club],
    instagram: "ohmberlin",
    website: "https://ohmberlin.com/",
    description: {
      ru: "Берлинский клуб электронной музыки.",
      de: "Berliner Club für elektronische Musik.",
    },
  },
  {
    id: "schwuz",
    name: "SchwuZ",
    city: "Berlin",
    categories: [queer, club],
    instagram: "schwuz",
    website: "https://schwuz.de/",
    description: {
      ru: "Квир-клуб с концертами и танцевальными ночами.",
      de: "Queerer Club mit Konzerten und Tanznächten.",
    },
  },
  {
    id: "so36",
    name: "SO36",
    city: "Berlin",
    categories: [club, queer, other],
    instagram: "so36_club",
    website: "https://www.so36.com/",
    description: {
      ru: "Панк-клуб в Kreuzberg: концерты и квир-вечеринки.",
      de: "Punkclub in Kreuzberg: Konzerte und queere Partys.",
    },
  },
  {
    id: "cassiopeia",
    name: "Cassiopeia",
    city: "Berlin",
    categories: [rave, club],
    instagram: "cassiopeia_berlin",
    website: "https://www.cassiopeia-berlin.de/",
    description: {
      ru: "Клуб у RAW-Gelände, электронные и концертные ночи.",
      de: "Club am RAW-Gelände für elektronische und Konzertnächte.",
    },
  },
  {
    id: "yaam",
    name: "YAAM",
    city: "Berlin",
    categories: [club, other],
    instagram: "yaam_berlin",
    website: "https://yaam.de/",
    description: {
      ru: "Клуб и культурная площадка у Ostbahnhof.",
      de: "Club und Kulturort am Ostbahnhof.",
    },
  },
  {
    id: "insomnia",
    name: "Insomnia Berlin",
    city: "Berlin",
    categories: [kink, club],
    instagram: "insomniaclubberlin",
    website: "https://www.insomnia-berlin.de/",
    description: {
      ru: "Ночной клуб для взрослых секс-позитивных вечеринок.",
      de: "Nachtclub für erwachsene sexpositive Partys.",
    },
  },
  {
    id: "folsom-europe",
    name: "Folsom Europe",
    city: "Berlin",
    categories: [kink, festival],
    instagram: "folsomeurope",
    website: "https://folsomeurope.info/",
    description: {
      ru: "Уличный фетиш-фестиваль в Берлине.",
      de: "Straßenfestival für Fetisch in Berlin.",
    },
  },
  {
    id: "easter-berlin",
    name: "Easter Berlin",
    city: "Berlin",
    categories: [kink, festival],
    instagram: "easterberlin",
    website: "https://blf.de/easterberlin/",
    areaNote: {
      ru: "Организатор — Berlin Leder und Fetisch e.V.",
      de: "Veranstalter ist Berlin Leder und Fetisch e.V.",
    },
    description: {
      ru: "Фетиш-фестиваль выходных вокруг Пасхи.",
      de: "Fetischfestival am Osterwochenende.",
    },
  },
  {
    id: "venus",
    name: "VENUS Berlin",
    city: "Berlin",
    categories: [kink, festival],
    instagram: "venusberlin.official",
    website: "https://www.venus-berlin.com/",
    description: {
      ru: "Ярмарка для взрослых с акцентом на эротику и фетиш.",
      de: "Messe für Erwachsene mit Schwerpunkt Erotik und Fetisch.",
    },
  },
  {
    id: "rave-the-planet",
    name: "Rave The Planet",
    city: "Berlin",
    categories: [rave, festival],
    instagram: "ravetheplanet",
    website: "https://www.ravetheplanet.com/",
    description: {
      ru: "Объединение технокультуры и уличный парад в Берлине.",
      de: "Verein für Technokultur und Straßenparade in Berlin.",
    },
  },
  {
    id: "pornceptual",
    name: "Pornceptual",
    city: "Berlin",
    categories: [queer, rave, kink],
    instagram: "pornceptual",
    website: "https://pornceptual.com/",
    description: {
      ru: "Берлинская серия квир-рейвов.",
      de: "Berliner Reihe queerer Raves.",
    },
  },
  {
    id: "watergate",
    name: "Watergate",
    city: "Berlin",
    categories: [rave, club],
    instagram: "watergate.club.official",
    website: "https://water-gate.de/",
    areaNote: {
      ru: "Хэндл виден на публичной странице Instagram и в профиле Mixmag. В HTML сайта клуба ссылки не было.",
      de: "Der Handle steht auf der öffentlichen Instagram-Seite und in einem Mixmag-Profil. Im HTML der Clubseite fehlte der Link.",
    },
    description: {
      ru: "Клуб у Обербаумбрюке с видом на Шпрее.",
      de: "Club an der Oberbaumbrücke mit Blick auf die Spree.",
    },
  },
  {
    id: "melt",
    name: "Melt Festival",
    city: "Gräfenhainichen",
    categories: [festival, rave],
    instagram: "meltfestival",
    website: "https://www.meltfestival.de/",
    areaNote: {
      ru: "Ferropolis, Ferropolisstraße.",
      de: "Ferropolis, Ferropolisstraße.",
    },
    description: {
      ru: "Электронный фестиваль в городе-декоре бывшего карьера.",
      de: "Elektronisches Festival in der Kulissenstadt des ehemaligen Tagebaus.",
    },
  },
  {
    id: "nature-one",
    name: "Nature One",
    city: "Kastellaun",
    categories: [festival, rave],
    instagram: "natureonefestival",
    website: "https://www.nature-one.de/",
    areaNote: {
      ru: "Pydna, Hunsrück.",
      de: "Pydna, Hunsrück.",
    },
    description: {
      ru: "Большой техно-фестиваль на бывшей ракетной базе.",
      de: "Großes Techno-Festival auf einem ehemaligen Raketengelände.",
    },
  },
  {
    id: "time-warp",
    name: "Time Warp",
    city: "Mannheim",
    categories: [festival, rave],
    instagram: "time_warp_official",
    website: "https://www.time-warp.de/",
    areaNote: {
      ru: "Немецкая дата 2027: Maimarkt Mannheim. Тот же аккаунт анонсирует издания в других странах.",
      de: "Deutscher Termin 2027: Maimarkt Mannheim. Derselbe Account kündigt Ausgaben in anderen Ländern an.",
    },
    description: {
      ru: "Многоэтажный техно-фестиваль, немецкое издание проходит в Mannheim.",
      de: "Techno-Festival über mehrere Floors, die deutsche Ausgabe in Mannheim.",
    },
  },
  {
    id: "mayday",
    name: "Mayday",
    city: "Dortmund",
    categories: [festival, rave],
    instagram: "mayday_dortmund",
    website: "https://www.mayday.de/",
    description: {
      ru: "Крупный индор-рейв в Dortmund.",
      de: "Großer Indoor-Rave in Dortmund.",
    },
  },
  {
    id: "feel",
    name: "Feel Festival",
    city: "Lichterfeld-Schacksdorf",
    categories: [festival, rave],
    instagram: "feelfestival",
    website: "https://feel-festival.de/",
    areaNote: {
      ru: "Bergheider See.",
      de: "Bergheider See.",
    },
    description: {
      ru: "Фестиваль у озера: хип-хоп, техно, хаус, диско и живая музыка.",
      de: "Festival am See: Hip-Hop, Techno, House, Disco und Live-Musik.",
    },
  },
  {
    id: "sea-you",
    name: "Sea You",
    city: "Freiburg",
    categories: [festival, rave],
    instagram: "seayou_festival",
    website: "https://www.seayou-festival.de/",
    areaNote: {
      ru: "Tunisee.",
      de: "Tunisee.",
    },
    description: {
      ru: "Электронный фестиваль у озера под Freiburg.",
      de: "Elektronisches Festival am See bei Freiburg.",
    },
  },
  {
    id: "ikarus",
    name: "Ikarus Festival",
    city: "Memmingen",
    categories: [festival, rave],
    instagram: "ikarus.festival",
    website: "https://www.ikarus-festival.de/",
    areaNote: {
      ru: "Allgäu Airport.",
      de: "Allgäu Airport.",
    },
    description: {
      ru: "Электронный кемпинг-фестиваль в аэропорту Allgäu.",
      de: "Elektronisches Campingfestival am Allgäu Airport.",
    },
  },
  {
    id: "stone-techno",
    name: "Stone Techno",
    city: "Essen",
    categories: [festival, rave],
    instagram: "the_third_room_t3r",
    website: "https://www.stone-techno.com/",
    areaNote: {
      ru: "Zollverein. На сайте фестиваля Instagram ведёт на аккаунт организатора The Third Room.",
      de: "Zollverein. Auf der Festivalseite führt Instagram zum Account des Veranstalters The Third Room.",
    },
    description: {
      ru: "Техно-фестиваль на территории Zollverein.",
      de: "Techno-Festival auf dem Gelände von Zollverein.",
    },
  },
];

const handlePattern = /^[A-Za-z0-9._]+$/;

function assertAccounts(list: readonly Account[]): void {
  const ids = new Set<string>();
  const handles = new Set<string>();
  for (const account of list) {
    if (ids.has(account.id)) {
      throw new Error(`duplicate id ${account.id}`);
    }
    ids.add(account.id);
    if (handles.has(account.instagram) || !handlePattern.test(account.instagram)) {
      throw new Error(`bad handle ${account.instagram}`);
    }
    handles.add(account.instagram);
    if (account.categories.length === 0) {
      throw new Error(`no categories ${account.id}`);
    }
    if (account.description.ru.trim() === "" || account.description.de.trim() === "") {
      throw new Error(`empty description ${account.id}`);
    }
  }
}

assertAccounts(accounts);

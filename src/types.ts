export type Category = "kink" | "rave" | "queer" | "club" | "festival" | "other";

export type Lang = "ru" | "de";

export interface Localized {
  ru: string;
  de: string;
}

export interface Account {
  id: string;
  name: string;
  city: string;
  categories: readonly Category[];
  description: Localized;
  instagram: string;
  website?: string;
  areaNote?: Localized;
}

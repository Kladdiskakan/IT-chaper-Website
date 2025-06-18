import type { LocaleKeys, FlattenLocale } from "international-types";

// First, get the type of your nested locale structure
type NestedLocale = typeof import("./en").default;

// Flatten it to work with international-types
type Locale = FlattenLocale<NestedLocale>;

// Now create your translation key type
type TranslationKey = LocaleKeys<Locale, undefined>;
type NavBarTranslationKey = LocaleKeys<Locale, "NavBar">;

export type { TranslationKey, Locale, NavBarTranslationKey };

/* ============================================================
   Ubicu i18n helpers — standard Astro i18n recipe.
   es is the default locale (served at "/"); en is prefixed ("/en/").
   ============================================================ */
import { ui, defaultLang, type Lang, type UIKey } from "./ui"

/** Read the active locale from a URL pathname (first segment). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/")
  if (seg in ui) return seg as Lang
  return defaultLang
}

/**
 * Translator bound to a locale. Returns the raw string (may contain inline
 * HTML — render with `set:html` where needed). Falls back to ES, then key.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key
  }
}

/**
 * Prefix an internal path with the active locale.
 * es → unchanged ("/about"); en → "/en/about". Anchors/external untouched.
 */
export function localizedPath(path: string, lang: Lang): string {
  if (path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:")) {
    return path
  }
  const clean = path.startsWith("/") ? path : `/${path}`
  if (lang === defaultLang) return clean
  return `/${lang}${clean === "/" ? "" : clean}`
}

/** Build the equivalent path in the other locale (for the language switch). */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url)
  let path = url.pathname
  // strip the current locale prefix
  if (current !== defaultLang) {
    path = path.replace(new RegExp(`^/${current}`), "") || "/"
  }
  return localizedPath(path, target)
}

export { type Lang, type UIKey }

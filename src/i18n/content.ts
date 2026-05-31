/* ============================================================
   Localized content-collection helpers.
   EN entries live in an `en/` subdirectory inside each collection
   (id = "en/<slug>"); ES entries are the base ids. For EN we use the
   translated entry when present, otherwise fall back to the ES entry.
   ============================================================ */
import { getCollection, type CollectionEntry } from "astro:content"
import type { Lang, UIKey } from "./ui"

export type LocalizedCollection =
  | "escalamiento"
  | "produccion_cientifica"
  | "proceso_design"

/** Per-collection metadata used by the listing/detail routes & components. */
export const COLLECTION_META: Record<
  LocalizedCollection,
  { titleKey: UIKey; descKey: UIKey; backKey: UIKey; listPath: string }
> = {
  escalamiento: {
    titleKey: "nav.escalamiento",
    descKey: "col.esc.desc",
    backKey: "col.esc.back",
    listPath: "/escalamiento",
  },
  produccion_cientifica: {
    titleKey: "nav.produccion",
    descKey: "col.prod.desc",
    backKey: "col.prod.back",
    listPath: "/produccion_cientifica",
  },
  proceso_design: {
    titleKey: "nav.proceso",
    descKey: "col.proc.desc",
    backKey: "col.proc.back",
    listPath: "/proceso_design",
  },
}

const EN_PREFIX = "en/"

export interface LocalizedEntry<T extends LocalizedCollection> {
  /** The entry to render (EN translation when available, else ES). */
  entry: CollectionEntry<T>
  /** The canonical (ES) slug used for URLs in both locales. */
  slug: string
  /** True when EN was requested but only the ES source exists. */
  isFallback: boolean
}

function isPublished(entry: CollectionEntry<LocalizedCollection>) {
  return !entry.data.draft && entry.data.publishDate < new Date()
}

/**
 * Return the published entries of a collection for a locale, newest first.
 * For `en`, each entry is the translated `en/<slug>` file when it exists,
 * otherwise the ES source (with `isFallback: true`).
 */
export async function getLocalizedCollection<T extends LocalizedCollection>(
  name: T,
  lang: Lang
): Promise<LocalizedEntry<T>[]> {
  const all = await getCollection(name, isPublished)
  const base = all.filter((e) => !e.id.startsWith(EN_PREFIX))
  const enMap = new Map(
    all
      .filter((e) => e.id.startsWith(EN_PREFIX))
      .map((e) => [e.id.slice(EN_PREFIX.length), e])
  )

  base.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  )

  return base.map((e) => {
    const en = enMap.get(e.id)
    const useEn = lang === "en" && !!en
    return {
      entry: (useEn ? en : e) as CollectionEntry<T>,
      slug: e.id,
      isFallback: lang === "en" && !en,
    }
  })
}

/**
 * `getStaticPaths`-shaped output for a collection's detail route in a locale.
 * `params.slug` is always the canonical ES slug so URLs match across locales.
 */
export async function getLocalizedPaths<T extends LocalizedCollection>(
  name: T,
  lang: Lang
) {
  const list = await getLocalizedCollection(name, lang)
  return list.map(({ entry, slug, isFallback }) => ({
    params: { slug },
    props: { entry, lang, isFallback },
  }))
}

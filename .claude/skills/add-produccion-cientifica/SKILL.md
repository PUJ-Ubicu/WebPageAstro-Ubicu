---
name: add-produccion-cientifica
description: >-
  Add new entries (Spanish + English) to the `produccion_cientifica` content
  collection of this Astro site. Handles two inputs: (1) a hosted PDF dropped in
  `public/Papers/`, or (2) an external article/news URL. In both cases it gathers
  a 16:9 cover image for the card preview, fills the frontmatter, and verifies the
  build. Use whenever the user wants to publish a new paper, article, or news item
  on the "Producción Científica" page.
---

# Add a `produccion_cientifica` entry (ES + EN)

Each item on the Producción Científica listing is **two** MDX files (a Spanish
base file and an English file under `en/`) plus **one** cover image. This skill
covers both supported sources — a self-hosted PDF or an external link — and the
exact conventions the collection requires.

## Key facts about this collection (don't re-derive these)

- **Schema** (`src/content.config.ts` → `produccion_cientifica`), all required
  except `author`:
  `draft (bool)`, `title (str)`, `snippet (str)`, `image {src, alt}`,
  `publishDate (str "YYYY-MM-DD HH:mm" → Date)`, `author (str, default "Ubicu")`,
  `category (str)`, `tags (str[])`, `link (str, REQUIRED)`.
- **Locale layout** (`src/i18n/content.ts`): ES entries are the base files in
  `src/content/produccion_cientifica/`; **EN entries live in the `en/`
  subdirectory** with the *same filename*. The listing shows the EN file when
  `lang=en`, else falls back to ES. Entries are sorted **newest-first**.
- **Visibility** (`isPublished`): an entry shows only if `draft: false` **and**
  `publishDate` is in the past. If the user wants it visible now, the date must be
  on or before today.
- **Card behavior** (`src/components/collections/CollectionList.astro`): because
  `link` is always set, every card is treated as external — the `link` value is
  used as the href **verbatim** and opens in a **new tab**. The MDX body is unused,
  so leave it empty.
- **`link` values**:
  - Hosted PDF in `public/Papers/Foo.pdf` → use **`/Papers/Foo.pdf`** (root-absolute).
    The site deploys to an org GitHub Pages domain (`https://PUJ-Ubicu.github.io`,
    **no base path**), so `public/` serves at the root. Use the *exact* filename
    (spaces/underscores/case must match the file on disk).
  - External article/news → use the full `https://…` URL as-is.
- **Image** (`image.src`): must point to a **real file** under
  `src/assets/images/prod_cientifica/`, validated at build time by Astro's image
  loader. ES files reference it as `../../assets/images/prod_cientifica/<name>`;
  EN files (one level deeper) as `../../../assets/images/prod_cientifica/<name>`.
  Target a **16:9** image so it fits the card's `aspect-video` box without squishing.
- **Categories / tags**: ES uses `category: "Articulo"` and tags ending in
  `Articulo`; EN uses `category: "Article"` and tags ending in `Article`. First tag
  is the publisher/source (e.g. `Frontiers`, `IEEE Access`, `JaverianaCali`).
- **Filename convention**: `articulo_<source>_<DDMMMYYYY>.mdx` with an uppercase
  Spanish-ish month (ENE FEB MAR ABR MAY JUN JUL AGO SEP OCT NOV DIC), e.g.
  `articulo_frontiers_13ABR2026.mdx`. Same filename in both the base dir and `en/`.

## Workflow

### Step 0 — Determine the source and gather metadata
Ask the user (or infer from what they gave you) whether each new item is a
**hosted PDF** or an **external link**, then collect metadata.

- **PDF source**: read page 1 of the PDF (the `Read` tool renders PDF pages) to
  extract the real **title, authors, journal/source, publication date, DOI**, and
  a one-paragraph abstract to base the `snippet` on. Note the source language.
- **Link source**: use `WebFetch` on the URL to extract **title, author/source,
  publication date**, and a short description for the `snippet`.

Confirm the title, source, and **publishDate** with the user when anything is
ambiguous (journals often give only an issue/year — pick a concrete in-the-past
date and say which). Don't invent authors or dates.

### Step 1 — Get the cover image
Always produce a 16:9 cover in `src/assets/images/prod_cientifica/`.

- **PDF source** — run the bundled helper from the repo root:
  ```sh
  .claude/skills/add-produccion-cientifica/scripts/pdf-cover.sh \
    "public/Papers/<FILE>.pdf" "<image-basename>" [crop_offset_y]
  ```
  It renders page 1 and crops a 16:9 banner from the top (journal logo + title).
  The optional 3rd arg shifts the crop down if the header has too much whitespace.

- **Link source** — gather a preview image one of these ways, then crop to 16:9:
  1. Prefer the page's social preview: find its `og:image` URL (via WebFetch /
     page `<head>`), download it to the assets dir, then
     `magick <downloaded> -resize 1600x -gravity North -crop 1600x900+0+0 +repage <dest>.png`.
  2. If there's no usable `og:image`, screenshot the page with the Chrome MCP
     tools (navigate to the URL, capture), save it, and crop to 16:9.
  Downloading/screenshotting an external asset is a fetch from a third party —
  tell the user the source you're pulling the image from before doing it.

Always **`Read` the generated image** to eyeball it (logo/title legible, not
cut awkwardly). Re-run with a different crop offset if needed.

Name the image to match the entry, e.g. `articulo_<source>_<YYYY-MM-DD>.png`.

### Step 2 — Write the two MDX files
Create the ES base file and the EN file (same filename) following the convention
above. Use this shape (ES example — EN is identical but English title/snippet,
`category: "Article"`, `Article` tag, and `../../../assets/...` image path):

```yaml
---
draft: false
title: "<title in the file's language>"
snippet: "<1–2 sentence summary in the file's language>"
publishDate: "<YYYY-MM-DD 00:00>"
image:
  {
    src: "../../assets/images/prod_cientifica/<image-basename>.png",
    alt: "<short alt text>",
  }
category: "Articulo"
author: "<journal / source>"
tags: [<Source>, Articulo]
link: "<absolute /Papers/... path  OR  full external URL>"
---
```

Leave the body empty (the card links out). For a bilingual item, give the ES file
the Spanish title/snippet and the EN file the English title/snippet; both point to
the same `link` and the same image.

### Step 3 — Verify
- Run `pnpm build` (this project uses **pnpm**, not npm). It must succeed; the
  image loader will fail loudly if `image.src` doesn't resolve.
- Confirm the new card is wired correctly in the output, e.g.:
  ```sh
  grep -o 'href="[^"]*"' dist/produccion_cientifica/index.html | grep -i '<source-or-papers>'
  grep -c "<part of the new title>" dist/en/produccion_cientifica/index.html
  ```
  For PDF items, also check the PDF copied through: `ls dist/Papers/`.
- Optionally `pnpm dev` and open `/produccion_cientifica` and
  `/en/produccion_cientifica` to eyeball the card and click-through.

Do **not** commit unless the user asks.

## Notes & pitfalls
- The base dir and `en/` file **must share the exact filename**, or the EN
  fallback logic won't pair them.
- A future `publishDate` silently hides the entry — that's the usual cause of "I
  added it but it's not showing."
- `link` for a PDF must match the on-disk filename character-for-character
  (including spaces and capitalization); mismatches 404 only in production.
- There's already an older 2023 IEEE conference entry
  (`articulo_ieee_28JUL2023.mdx`); a new IEEE item is a separate file — don't
  overwrite it.

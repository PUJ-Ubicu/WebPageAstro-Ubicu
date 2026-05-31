#!/usr/bin/env bash
# Generate a 16:9 cover banner from page 1 of a PDF, for a produccion_cientifica
# entry. Renders the first page and crops a 1600x900 banner from the top (where
# the journal logo + title live), writing into the site's image assets dir.
#
# Usage (run from the repo root):
#   scripts/pdf-cover.sh <input.pdf> <output-basename> [crop_offset_y]
#
#   <input.pdf>        e.g. "public/Papers/ArticuloUBICU_Frontiers.pdf"
#   <output-basename>  e.g. "articulo_frontiers_2026-04-13"  (no extension)
#   [crop_offset_y]    optional pixels to push the crop down (default 0) if the
#                      page header has too much top whitespace.
#
# Requires: pdftocairo (poppler-utils) and magick (ImageMagick).
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "usage: $0 <input.pdf> <output-basename> [crop_offset_y]" >&2
  exit 2
fi

PDF="$1"
NAME="$2"
OFFY="${3:-0}"
DESTDIR="src/assets/images/prod_cientifica"

if [ ! -f "$PDF" ]; then
  echo "error: PDF not found: $PDF" >&2
  exit 1
fi
if [ ! -d "$DESTDIR" ]; then
  echo "error: assets dir not found: $DESTDIR (run from the repo root)" >&2
  exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Render page 1 at 1600px wide (pdftocairo may zero-pad the suffix: -1 or -01).
pdftocairo -png -f 1 -l 1 -scale-to-x 1600 -scale-to-y -1 "$PDF" "$TMP/page"
SRC="$(ls "$TMP"/page-*.png | head -1)"

# Crop a 16:9 banner from the top.
magick "$SRC" -gravity North -crop "1600x900+0+${OFFY}" +repage "$DESTDIR/$NAME.png"

echo "Wrote $DESTDIR/$NAME.png"

# Pagination changelog

## 2.0.4
- Fixes an issue with small page counts (4,5,6,7) in which on some page numbers
an ellipsis is displayed where a single-page is missing, or both the ellipsis and
a single page are skipped leaving a gap in the sequence. New system uses ellipsis for
2 or more pages only, and displays single pages in its place, when appropriate.

## 2.0.3

- Removed redundant package-lock.json (due to workspaces config in monorepo). This fixes vulnerability in the npm `ip` package.
- Fixed an accessibility issue with accessibility of the ellipsis-based "overflow". 

## 2.0.2

- Changes to how styles are inserted into the document.

## 2.0.1

- Updated color variables to go inline with CEILAB color palette
- Updated pagination buttons styles to be consistent with other design system buttons

## 2.0.0

- bundle the CSS in the JS

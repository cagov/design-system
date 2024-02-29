# Step list changelog

## 3.0.1

- Removed redundant package-lock.json (due to workspaces config in monorepo). This fixes vulnerability in the npm `ip` package.

## 3.0.0

- Moved built CSS file to dist folder.

## 2.0.2

- Updated color variables to go inline with new CEILAB color palette.

## 2.0.1

- Updated step list border color from secondary to highlight.

## 2.0.0

- Breaking change: Remove legacy non namespaced class names. This will break versions not using cagov- class names
- Use counter-increment for numbering

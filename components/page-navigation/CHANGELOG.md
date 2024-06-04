# Page navigation changelog

## 2.2.3

- Updated css to include aside selector.

## 2.2.2

- Removed redundant package-lock.json (due to workspaces config in monorepo). This fixes vulnerability in the npm `ip` package.

## 2.2.1

- Fix anchor linking problem with 2.2.0 in JAWS.

## 2.2.0

- Remove polyfill for smooth scrolling in Safari.

## 2.1.3

- Changes to how styles are inserted into the document.

## 2.1.2

- Ensure the browser's focus follows the link, for accessibility purposes.

## 2.1.1

- Removed JS-based insertion of this widget below H1 on the page.

## 2.1.0

- Renamed package from `ds-content-navigation` to `ds-page-navigation`.
- Renamed custom element name from `<cagov-content-navigation>` to `<cagov-page-navigation>`.

## 2.0.1

- Inserting content navigation after h1 in mobile. Removed default margin left from list items.

## 2.0.0

- bundle the CSS in the JS

## 1.0.8

- Added label to sidebar menu for accessibility.
- Made link targets more specific in JavaScript so they don't interfere with skip to content navigation.

## 1.0.7

- Linted and formatted code per root eslint/prettier settings.
- Added unit test.

## 1.0.6

- Changed content navigation border color to Gray-300.

## 1.0.5

- Removed sticky position since it caused scroll to target positioning bug.

## 1.0.4

- Made content navigation sticky (Request came from cannabis project issue #234). To do: need to highlight nav items based on the h2 # or section, which user is scrolling through.

## 1.0.3

- Reorganized sass file. Added border bottom to all list items and border top to the first child only. (Request came from cannabis project issue #223)

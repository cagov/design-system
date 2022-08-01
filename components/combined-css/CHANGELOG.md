# CHANGELOG for ds-compiled-css
`ds-compiled-css`

## 2.0.3
* Changes to the way CSS-in-JS components insert styles into the document.

## 2.0.2
* Updated color variables to go inline with new CEILAB color palette.

## 2.0.1
* Added missing statewide-header and highlight-section scss imports.

## 2.0.0
* Fixes breaking changes with components that now offer CSS via JS.
* Incorporates several renamed components. See separate changelogs within each component for implementation details.
  * `ds-feedback` is now `ds-page-feedback`.
  * `ds-agency-footer` is now `ds-site-footer`.
  * `ds-branding` is now `ds-site-header`.
  * `ds-menu` is now `ds-site-navigation`.
  * `ds-content-navigation` is now `ds-page-navigation`.
  * `ds-button-grid` is now `ds-link-grid`.

# 1.0.5
* Step list border color is now changed to highlight-color. Fixed mobile search accessibility. Fixed page-alert dismiss button accessibility.

# 1.0.4
* Replaced pdf-icon and external-link-icon components with link0icon components. Uncluding newer version of base-css/.

# 1.0.3
* Added page-alert's component css an js to the import lists. 

# 1.0.2
* Linted and formatted code per root eslint/prettier settings.

# 1.0.1
* Added rollup.config.js file that generates combined index.js file from all design system components. Making sure that all generated css and js files are exported into /dist folder. Disabled source maps generations option.

# 1.0.0
* Compiled css initial commit

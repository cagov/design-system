# Accordion changelog

<a href="https://www.npmjs.com/package/@cagov/ds-accordion">https://www.npmjs.com/package/@cagov/ds-accordion</a>

## 2.0.4

- Removed redundant package-lock.json (due to workspaces config in monorepo). This fixes vulnerability in the npm `ip` package.

## 2.0.3

- Changes to how styles are inserted into the document.

## 2.0.2

- Fixed new color palette accordions color contrast accessibility issues

## 2.0.1

- Bug fix for multiline summary expansion height determination
- Design tweaks to open indicator icon

## 2.0.0

- Rewrite to use the details element which expands and collapses without requiring javascript. The javascript remains only for the animation. This radically improves progressive enhancement while reducing code size.
- Make use of :defined to enhance design styles. This is available after the custom element's javascript has been executed.

### Upgrade notes 2.0.0

- **Updated markup structure** please refer to the [README](https://github.com/cagov/design-system/blob/main/components/accordion/README.md) for the latest markup example. [See diff](https://github.com/cagov/design-system/pull/698/files#diff-24fcc3b7dc89f0002c127de7c93d334e359cff57a359d69d1a4a7c07002e4c9e)
- When performing this component update, existing accordion markup content will need to be mapped to the new HTML structure in content. Any integrations will also need to update structure and content implementations.

## 1.0.9

- Add prepublish hook which writes latest sample HTML into readme from template.html
- Update description to match latest design system docs

## 1.0.8

- Linted and formatted code per root eslint/prettier settings.
- Added unit test.

## 1.0.7

- Added src folder with index.scss file to be consistent with the rest of the ds components.

## Previous versions

This package was previously published under the name @cagov/accordion which has now been deprecated. Higher version numbers below refer to the retired package name.

### 2.0.11

- Fixed "allbuttons is not defined" console error.

### 2.0.10

- Fixed tabindex for the links that are inside of the accordions that are open by default.

### 2.0.9

- Included base css styles inside the accordion component itself so it can run well without any of the global site styles, put initial on page load tabindex generation inside of the callback class.
- Clean out old code.

### 2.0.8

- All links and buttons inside of the collapsed accordion container now have attibute tabindex -1, this attribute is removed as soone as accordion container is expanded.

### 2.0.7

- Make hidden links really hidden to Screen Reader, by changing the body container to be "display: none".

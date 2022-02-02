# Accordion changelog

<a href="https://www.npmjs.com/package/@cagov/ds-accordion">https://www.npmjs.com/package/@cagov/ds-accordion</a>

## 1.0.9
* Add prepublish hook which writes latest sample HTML into readme from template.html
* Update description to match latest design system docs

## 1.0.8
* Linted and formatted code per root eslint/prettier settings.
* Added unit test.

## 1.0.7
* Added src folder with index.scss file to be consistent with the rest of the ds components.

## Previous versions

This package was previously published under the name @cagov/accordion which has now been deprecated. Higher version numbers below refer to the retired package name.

## 2.0.11
* Fixed "allbuttons is not defined" console error.

## 2.0.10
* Fixed tabindex for the links that are inside of the accordions that are open by default.

## 2.0.9
* Included base css styles inside the accordion component itself so it can run well without any of the global site styles, put initial on page load tabindex generation inside of the callback class.
* Clean out old code.

## 2.0.8
* All links and buttons inside of the collapsed accordion container now have attibute tabindex -1, this attribute is removed as soone as accordion container is expanded.

## 2.0.7
* Make hidden links really hidden to Screen Reader, by changing the body container to be "display: none".

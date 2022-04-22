# California Design System


## 1.06

- #807 - Updated "Skip to content" instructions with clearer instructions
- #806 - Updated README to include additional information on tests, and directory structure
- #805 - Hyperlinked the ca.gov icon in the sitewide footer
- #802 - Added a new webpage ([Why web components](https://designsystem.webstandards.ca.gov/why-web-components)) explaining the uses of web components 
- #799 - Standardized button styles on the homepage 
- #799 - Updated color palette
- #795 - Added additional heading font-weight options

## 1.0.5

- #766 - Icons: Fixed script bug and updated docs
- #774 - Images in cards made into links

## 1.0.4

- #652 - Fixed bugs on base-css preview and add e2e test
- #608 - Added new icons (ds-icons) component
- #610 - Added illustration for the 404 error page (bear with binoculars)
- #678 - Added icon component illustration icon for documentation page link
- #679 - Added icons component documentation
- #757 - Removed "Download" from library links
- #746 - Added Broadband for All website example to showcase design system implementation

## 1.0.3

- #584 - Capitalize README
- #688 - Design tokens add a reference page
- #694 - Update PR to allow capitalization in github branches
- #698 - Accordion: Better multiline summaries, fixes to open indicator icon
        ⚡️ Markup change since 2.0.0: accordion markup will need to be updated (`ds-accordion`, 2.0.1) 
        [CHANGELOG](https://github.com/cagov/design-system/blob/main/components/accordion/CHANGELOG.md)
- #703 - Step List: Adjust padding on `ds-step-list`

## 1.0.2

- 507 - Home page contact form - Submit button now changes on mouse hover.
- 439 - Added new spacing utility classes.
- 530 - Improved tabbing behavior of homepage form. (a11y)
- 506 - Home page contact form - Improved button colors. (a11y)
- 502 - Components - Added reset demo function.
- 533 - Home page contact form - Better align image.
- 656 - Statewide Header - Made CA.gov icon meaningful. (a11y)
- 656 - Site navigation - Made arrows be decorative. (a11y)
- 661 - Improved tabbing behavior on side navigation. (a11y)
- 631 - Step list - Increased contrast. (a11y)
- 675 - Page not Found - Updated text.
- 632 - Design guide - Improved color tables. (a11y)
- 667 - Combined CSS - Updated.
- 606 - Made page titles consistent.
- 313 - Line height improvements. (a11y)
- 685 - Feature card - Improved sample markup

## 1.0.1

- Add automated end to end tests using playwright that validate instances of all page templates with axe accessibility checks. These run against any opened PR via git action
- Tweaks for design and content fixes
- Some accessibility bugs on site fixed
- Added reset feature to component demos
- Component folder names updated for consistency along with npm package names, custom element names and css classes
- Page titles now pulled from meta data

## 1.0.0

* Initial release includes 18 components, principles, get started documentation, contact forms, design and content style guides. The component documentation is dynamically built from the component's README doc and includes live interactive demos of the component.

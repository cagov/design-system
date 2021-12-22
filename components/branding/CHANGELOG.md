# Visual components >> Agency header >> Changelog || 30

`ds-branding`

# 1.0.8
* Separated `gap` on .mobile-icons into `column-gap` and `row-gap`.
* Added `align-self: center` to .grid-org-name.

# 1.0.7
* Linted and formatted code per root eslint/prettier settings.
* Added unit test.

# 1.0.6
* Changed search bar border and search button to Primary color.

# 1.0.5
* Fixed focus color variables to --highlight-color. Fixed focus aesthetics for toggle menu button in mobile. Updated gap distance between search and toggle menu mobile buttons to 24px according to figma. Updated branding container's left and right padding to 16px to be consistent with other components.

# 1.0.4
* Fixed for design preference where mobile icons should continue to flow inline when a branding logo is present (instead of bunching up at a CSS grid border).
* Fixed problem where search icon could get pinched vertically on smaller screen sizes.

# 1.0.3
* Refactored much of the layout to use CSS Grid. This will allow us to support different sites with different needs. Some will have logos, some not. Some will have search, some not. Etc. CSS Grid helps us avoid margin/padding problems between all these different scenarios.
* Added a number of new CSS variables to customize font settings.
    * org-name-state-font
    * org-name-state-font-size
    * org-name-state-font-weight
    * org-name-state-line-height
    * org-name-state-text-transform
    * org-name-dept-font
    * org-name-dept-font-size
    * org-name-dept-font-weight
    * org-name-dept-line-height
    * org-name-dept-text-transform

# 1.0.2
* Added 15px padding in mobile to the .branding selector (that padding property used to be applied to the entire header container in the base-css). Also, added menu hamburger styles (moved them from the menu component). Fixed hamburger icon colors and width properties.



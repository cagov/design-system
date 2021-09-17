# CHANGELOG for ds-branding
`ds-branding`
# 1.0.2
* Added 15px padding in mobile to the .branding selector (that padding property used to be applied to the entire header container in the base-css). Also, added menu hamburger styles (moved them from the menu component). Fixed hamburger icon colors and width properties.
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


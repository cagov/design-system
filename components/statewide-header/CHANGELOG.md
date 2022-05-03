# Statewide header changelog


## 1.0.15
* Updated color variables to go inline with new CEILAB color palette.

## 1.0.14
* Moved screen reader announcement to CA<span>.</span>gov SVG.

## 1.0.13
* Changed CA<span>.</span>gov logo dimensions to 33px by 24px to make it consistent with statewide-footer's icon.

## 1.0.12
* Made CA<span>.</span>gov logo linked to CA<span>.</span>gov website.
* Added aria-hidden=”true” attribute to the CA<span>.</span>gov svg icon, so it is hidden from assistive technologies.

## 1.0.11
* Linted and formatted code per root eslint/prettier settings.
* Added unit test.

## 1.0.10
* Updated statewide header container's left and right padding to 16px.

## 1.0.9
* Removed sticky header feature until it's fully developed. Decrease spacing between CA<span>.</span>gov icon and tagline to 8px.

## 1.0.8
* Added script and styles that toggles official header display on scroll. 

## 1.0.7
* Making sure that CA<span>.</span>gov logo have CA<span>.</span>gov colors, not the colors of the department/agency. And removed link form CA<span>.</span>gov logo because people might click the CA<span>.</span>gov logo thinking they are going to the homepage 

## 1.0.6
* Renamed .ofiicial-logo to .official-logo. Should help prevent naming conflicts within existing markup.

## 1.0.5
* Removed -15px padding left from the .official-header selector since we we do not need that padding anymore because we removed header-container with its padding properties from the base css.

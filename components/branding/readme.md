# Site header

The site header puts your site’s name at the top of your site, under the statewide header. This allows people to readily identify the site they’re visiting. If they select the site’s name, it returns them to the site’s homepage.

The site header includes “State of California” above the site name to identify its association with the state.

There are two optional elements you can add to the site header:

- A logo on the left that, if selected, takes visitors to the homepage
- A search box on the right that allows visitors to search the site

On mobile, the search box becomes a search button that opens a search box. It displays to the right of the site name.

The search connects with whatever site search you set up on your site.

## When and how to use it

The site header goes on all pages of your website. This is a required component when using the Design System.

If you use a logo in your site header, make sure that any text in it is legible. Look at how much and where any white space is.

### How not to use it

Do not modify the site header beyond adding the site name and a logo.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-branding |
| JavaScript | no |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. Edit the “logo”, “logo-state”, and “logo-department” elements to meet your own department’s branding needs.
2. Connect the search form to your own system.

Note: There are two versions of the markup, one with and one without a logo. 

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--org-name-state-font`
- `--org-name-state-font-size`
- `--org-name-state-font-weight`
- `--org-name-state-line-height`
- `--org-name-state-text-transform`
- `--primary-color`
- `--primary-dark-color`
- `--secondary-color`
- `--small-text`
- `--standout-color`
- `--w-lg`
- `--white`
- `--gray-100`
- `--gray-300`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```

## Accessibility

### Review items specific to the site header accessibility

- If you are using search component make sure it has span label saying that is  “google custom search”, make sure that span  has `sr-only` class and `id` attribute  that is referenced in search input box `aria-labelledby` attribute. Also, make sure that google search submit button has span with class `sr-only` and the word “submit” in it.
- If you are using search and menu components make sure that mobile buttons that activate those components have no focus in the desktop view. Also, make sure that they have correct `area-expanded` attributes  whenever the sections that they are controlling are either expanded or collapsed.
- If you are using site logo image make sure it has proper alt text.
- Make sure that all links and buttons have solid, 2px outline that is using `—-highlight-color` variable on focused state.

### Standard accessibility review

Components in Alpha status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

Components in Beta status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the VoiceOver screen reader on desktop
- Reviewed with the [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) screen reader on mobile.
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes
- Reviewed component display using content in English, Spanish, Simplified Chinese, German, and Arabic (using right to left display (RTL))

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component requires the following content assets and configuration variables.

- Organization or project name `string`, `plain text`
- Try to match the height of your logo to the website's title (including the State of California heading). This is roughly 88px. Do not make your logo less tall than this.
- Since the name of the website in part of the header, your logo does not need to include your name. You can use just the visual symbol, if you have one.
- If the site title appears too close to the search bar, then your logo may be too wide.
- Search feature will require a CX Google search id. Part of sitewide config settings, see `odi-publishing` examples.




# Statewide footer

The statewide footer puts a standard footer at the very bottom of your site. Having a common footer tells people that the website is an official product of the State of California, which increases user trust.

It always includes:

- The ca.gov logo on the left that links to the ca.gov site.
- A set of standard links:
    - Conditions of use
    - Privacy policy
    - Accessibility (policies)
- The copyright notice. It appears at the very bottom of the statewide footer.

You can opt to include additional links, like:

- Contact us
- Statewide accessibility information
- Legal content

## When and how to use it

Always use the statewide footer. Place it at the bottom of the website, below the agency footer and all other content.

Do not add other types of links to the statewide footer. Add them to the site footer instead.

### How not to use it

Do not add other elements to or change the statewide footer. Use it only as designed.

Do not combine the statewide footer with department logo, department links, or social media icons. This is contained in the agency footer.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-statewide-footer |
| JavaScript | no |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. Adjust links as needed.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--primary-dark-color`
- `--w-lg`
- `--black`
- `--gray-200`
- `--primary-color`
- `—-primary-dark-color`
- `--highlight-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```

## Accessibility

### Review items specific to the statewide footer accessibility

- Make sure that statewide footer’s links have solid, 2px outline that is using `—-highlight-color` variable on focused state.
- Make sure that cagov-logo link has `title` or `aria-label` attribute in it, so screen readers users would understand what is that link about.
- Make sure that svg icon inside of the cagov-logo has `aria-hidden=”true”` attribute, so it is hidden from assistive technologies.
- Make sure that all statewide footer elements are contained inside of the `footer` tag, which is a important semantic landmark for assistive technologies.

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

## Content Model

The content for this component is fixed and can be used as-is, as described in the installation instructions. 

For the URL links, please refer to the latest version of the component for the most up-to-date URLs.

These links are managed by [ca.gov](http://ca.gov). Additional information about these requirements can be found in the CA State Webstandards.

| Page | URL | Required | Order |
| --- | --- | --- | --- |
| CA.gov home | https://www.ca.gov | Yes | 1 |
| Conditions of Use | https://www.ca.gov/use/ | Yes | 2 |
| Privacy Policy | https://www.ca.gov/privacy-policy/ | Yes | 3 |
| Accessibility | https://www.ca.gov/accessibility/ | Yes | 4 |
| Contact Us | URL to Contact page for your organization | As needed |  |
| Accessibility certification | URL to the required certified, hosted PDF file. | As needed |  |
| Legal content |  | As needed |  |

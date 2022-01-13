# Site footer

The site footer is a set of links that go on all the pages of the website. It is at the bottom of the page, above the statewide footer.

- It starts with an optional logo on the left that links back to the homepage for the website.
- In the middle is a set of links that you can customize.
- On the right are social media icons that link to official social media accounts. These could be for a department or a campaign. The available social media icons include:
    - Facebook
    - Twitter
    - Instagram
    - YouTube
    - Github
    - LinkedIn
    - Email

The site footer allows you to put links and information on every page. This is usually general info about the department or subject.

## When and how to use it

The site footer goes on all pages of your website. This is a required component when using the Design System.

Examples of links that go in the site footer include:

- General department info
- Contact information
- Department accessibility information
- Careers page

Check the statewide footer to make sure you do not duplicate link text across them. Using the same terms in both places confuses people.

Link the social media icons to your official social media accounts.

### How not to use it

Do not use the site footer:

- For primary calls to action
- As secondary navigation
- To link to information that meets primary user needs

Do not include more than one social media account per platform.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-agency-footer |
| JavaScript | no |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. Place your own site links within the `<div class="footer-secondary-links">` element. Your social media links go within `<div class="footer-social-links">`. Refer to the Content model section for notes on mapping your data to the **Sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--primary-color`
- `—primary-dark-color`
- `—primary-hover-color`
- `—highlight-color`
- `—w-lg`
- `—gray-100`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```

## Accessibility

### Review items specific to the site footer accessibility

- Make sure that site footer's section tag has 'aria-label="agency footer"' attribute is there.
- If you use footer logo image in your site footer make sure image has alt text
- if you are using footer social links make sure that inks are using sr-only link description. For instance: `<span class="sr-only">Facebook</span>`
- Make sure that social svg icons have `aria-hidden="true"` attributes added to them.

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

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name | Data type | Field type | Selector | Options |
| --- | --- | --- | --- | --- |
| Organization logo image | String | URL to logo graphic, PNG, JPG, webp, etc. (45x45 pixels) | .footer-logo .logo-img  |  |
| Organization logo alt text | String | Plain text | .footer-logo .logo-img[alt]  |  |
| Secondary links Title | String | Plain text | .footer-secondary-links ul li  |  |
| Secondary links URL | String | URL | .footer-secondary-links ul li a[href]  |  |
| Social Links Icon | String | URL to SVG file (24x24 pixels) | .footer-social-links ul li a svg  | Facebook, Twitter, YouTube, Instagram, LinkedIn, Github |
| Screen reader only link description | String | Plain text | sr-only |  |
| Social Links url | String | URL | .footer-social-links ul li a[href]  |  |

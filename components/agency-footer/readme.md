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

## When and how to use it

The site footer goes on all pages of your website.

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

## Demo and sample markup

<html-preview>

```html preview
<section aria-label="agency footer" class="agency-footer">
  <div class="container">
    <div class="footer-logo">
      <a href="/"
        ><img
          class="logo-img"
          src="https://files.covid19.ca.gov/img/circle-logo.png"
          alt="Organization logo"
      /></a>
    </div>
    <div class="footer-secondary-links">
      <a href="#">Secondary link 1</a>
      <a href="#">Secondary link 2</a>
      <a href="#">Secondary link 3</a>
      <a href="#">Secondary link 4</a>
    </div>
    <div class="footer-social-links">
      <a href="#">
        <span class="sr-only">Facebook</span>
        <svg
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <path
            d="M14,12.7h3.2L17.7,9H14V6.7c0-1,0.3-1.9,1.9-1.9h2.1V1.5c-0.3,0-1.6-0.2-2.9-0.2c-2.9,0-4.9,1.7-4.9,5.1v2.9H6.9V13h3.2v9.5
	H14L14,12.7L14,12.7z"
          />
        </svg>
      </a>
      <a href="#">
        <span class="sr-only">GitHub</span>
        <svg
          aria-hidden="true"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <g>
            <path
              d="M23.3,12.8c0,0.3-0.1,0.7-0.1,1c-0.2,1.5-0.7,3-1.5,4.3c-0.9,1.5-2.1,2.7-3.5,3.6c-0.8,0.5-1.6,0.9-2.4,1.2
		c-0.5,0.2-0.8-0.1-0.8-0.6c0-1,0-2,0-2.9c0-0.6-0.1-1.2-0.4-1.7c-0.1-0.2-0.2-0.3-0.3-0.4c0.4-0.1,0.9-0.1,1.3-0.2
		c1.1-0.3,2.2-0.8,2.9-1.8c0.5-0.7,0.7-1.6,0.9-2.5c0.1-0.7,0.1-1.4,0-2.1S19,9.4,18.5,8.9c-0.1-0.1-0.1-0.2-0.1-0.4
		c0.3-0.9,0.2-1.8-0.2-2.7c0-0.1-0.1-0.1-0.2-0.1c-0.4-0.1-0.8,0.1-1.1,0.2C16.1,6,15.5,6.3,15,6.6c-0.1,0-0.2,0.1-0.3,0.1
		c-1.8-0.4-3.5-0.4-5.3,0c-0.1,0-0.2,0-0.3-0.1c-0.7-0.5-1.5-0.8-2.3-1l0,0C6.2,5.5,6.1,5.5,5.9,6c-0.2,0.8-0.3,1.6,0,2.4
		c0,0.1,0,0.2,0,0.2C5,9.7,4.7,11,4.8,12.3c0.1,0.8,0.3,1.6,0.6,2.3c0.5,1,1.4,1.6,2.4,2c0.7,0.2,1.3,0.3,2,0.5l0,0
		c-0.4,0.4-0.5,0.8-0.6,1.3c0,0.1-0.1,0.2-0.1,0.2c-0.8,0.3-1.6,0.4-2.3,0c-0.4-0.2-0.6-0.5-0.8-0.9c-0.3-0.6-0.8-1-1.4-1.1
		c-0.2-0.1-0.5,0-0.7,0s-0.2,0.1-0.1,0.3C3.9,17,4,17.1,4.1,17.2c0.6,0.3,0.9,0.9,1.2,1.5c0.2,0.4,0.3,0.7,0.6,1
		c0.5,0.4,1.1,0.6,1.7,0.6c0.5,0,1,0,1.6,0c0,0,0,0,0,0.1c0,0.6,0,1.2,0,1.8c0,0.6-0.3,0.8-0.9,0.6c-2.9-1-5-2.9-6.4-5.5
		c-1.1-2-1.4-4.1-1.1-6.4C1.1,8.5,2,6.5,3.5,4.7c1.6-1.8,3.6-3.1,6-3.6c3.5-0.7,6.7,0,9.5,2.3c2.1,1.7,3.4,3.9,4,6.6
		c0.1,0.4,0.1,0.8,0.2,1.2c0,0.1,0,0.2,0,0.2C23.3,11.9,23.3,12.3,23.3,12.8z"
            />
          </g>
        </svg>
      </a>
      <a href="#">
        <span class="sr-only">Twitter</span>
        <svg
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <path
            d="M21.2,8c0,0.2,0,0.4,0,0.6c0,6-4.6,12.9-12.9,12.9c-2.6,0-4.9-0.7-7-2c0.3,0,0.7,0.1,1,0.1c2.2,0,4.1-0.7,5.7-1.9
	c-2,0-3.6-1.4-4.2-3.1c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.9-0.1,1.2-0.1c-2-0.4-3.6-2.2-3.6-4.5c0,0,0,0,0-0.1c0.6,0.3,1.3,0.6,2,0.6
	c-1.2-0.9-2-2.2-2-3.8c0-0.9,0.2-1.6,0.6-2.2c2.2,2.8,5.5,4.6,9.3,4.7C12,9,12,8.6,12,8.2c0-2.5,2-4.5,4.5-4.5
	c1.3,0,2.5,0.6,3.3,1.4c1-0.2,2-0.6,2.9-1c-0.2,1.1-1,1.9-2,2.5c1-0.1,1.8-0.3,2.6-0.7C22.9,6.5,22.2,7.4,21.2,8L21.2,8z"
          />
        </svg>
      </a>
      <a href="#">
        <span class="sr-only">Email</span>
        <svg
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <path
            d="M22.9,6.4c-0.1-1-0.8-1.8-1.8-1.8c0,0-0.1,0-0.1,0v0l-18,0c0,0-0.1,0-0.1,0C1.9,4.6,1.1,5.4,1,6.4c0,0,0,0.1,0,0.1
	s0,0.1,0,0.1v12.8h21.9V6.6c0,0,0-0.1,0-0.1C22.9,6.4,22.9,6.4,22.9,6.4L22.9,6.4z M19.3,6.5L12,12.7L4.6,6.5
	C4.6,6.5,19.3,6.5,19.3,6.5z M3,8.4C3,8.4,3,8.5,3,8.4l0-0.8l4.8,4.1L3,16.3C3,16.3,3,8.4,3,8.4z M4,17.4l4.9-4.8l3.1,2.7l3.2-2.8
	l4.8,4.9L4,17.4L4,17.4z M21,16.3l-4.8-4.6L21,7.6v0.8c0,0,0,0,0,0L21,16.3L21,16.3z"
          />
        </svg>
      </a>
      <a href="#">
        <span class="sr-only">YouTube</span>
        <svg
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <path
            d="M23,6.6c0,0-0.3-1.6-0.9-2.2c-0.9-0.8-1.8-0.8-2.2-0.9C16.7,3.2,12,3.2,12,3.2s-4.7,0-7.9,0.3c-0.4,0-1.4,0-2.2,0.9
                   C1.2,5.1,1,6.6,1,6.6s-0.3,2-0.3,3.7v1.7c0,2,0.3,3.7,0.3,3.7s0.3,1.6,0.9,2.2c0.8,0.9,2,0.9,2.5,0.9c1.8,0.1,7.6,0.3,7.6,0.3
                   s4.7,0,7.9-0.3c0.4,0,1.4,0,2.2-0.9c0.7-0.7,0.9-2.2,0.9-2.2s0.3-1.8,0.3-3.7v-1.7C23.2,8.4,23,6.6,23,6.6z M8.7,15.9V6.6l8.8,4.6
                   L8.7,15.9L8.7,15.9z"
          />
        </svg>
      </a>
      <a href="#">
        <span class="sr-only">Instagram</span>
        <svg
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewbox="0 0 24 24"
          style="enable-background:new 0 0 24 24;"
          xml:space="preserve"
        >
          <path
            d="M16.4,1.5H7.7c-3.4,0-6.2,2.7-6.2,6.2v8.8c0,3.4,2.8,6.1,6.2,6.1h8.8c3.4,0,6.1-2.8,6.1-6.1V7.6C22.5,4.2,19.8,1.5,16.4,1.5
	z M20.4,16.4c0,2.2-1.8,4.1-4.1,4.1H7.6c-2.2,0-4.1-1.8-4.1-4V7.7c0-2.2,1.8-4.1,4.1-4.1h8.8c2.2,0,4,1.8,4,4.1L20.4,16.4L20.4,16.4
	z"
          />
          <path
            d="M12,7.1c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9S14.7,7.1,12,7.1z M12,14.9c-1.6,0-2.9-1.3-2.9-2.9
	s1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S13.6,14.9,12,14.9z"
          />
          <path
            d="M18.5,6.9c0,0.7-0.6,1.3-1.3,1.3S16,7.6,16,6.9s0.6-1.3,1.3-1.3S18.5,6.2,18.5,6.9z"
          />
        </svg>
      </a>
    </div>
  </div>
</section>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-agency-footer |
| JavaScript   | no               |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
3. Place your own site links within the `<div class="footer-secondary-links">` element. Your social media links go within `<div class="footer-social-links">`. Refer to the Content model section for notes on mapping your data to the **Sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`
- `--primary-dark-color`
- `--primary-hover-color`
- `--highlight-color`
- `--w-lg`
- `--gray-100`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that site footer's section tag has `aria-label="agency footer"` attribute is there.
- If you use footer logo image in your site footer make sure image has alt text.
- If you are using footer social links make sure that inks are using sr-only link description. For instance: `<span class="sr-only">Facebook</span>`
- Make sure that social svg icons have `aria-hidden="true"` attributes added to them.

### Standard accessibility review

Components in Alpha status must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes
- 
## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name                                | Data type | Field type                                               | Selector                              | Options                                                 |
| ----------------------------------- | --------- | -------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------- |
| Organization logo image             | String    | URL to logo graphic, PNG, JPG, webp, etc. (45x45 pixels) | .footer-logo .logo-img                |                                                         |
| Organization logo alt text          | String    | Plain text                                               | .footer-logo .logo-img[alt]           |                                                         |
| Secondary links Title               | String    | Plain text                                               | .footer-secondary-links ul li         |                                                         |
| Secondary links URL                 | String    | URL                                                      | .footer-secondary-links ul li a[href] |                                                         |
| Social Links Icon                   | String    | URL to SVG file (24x24 pixels)                           | .footer-social-links ul li a svg      | Facebook, Twitter, YouTube, Instagram, LinkedIn, Github |
| Screen reader only link description | String    | Plain text                                               | sr-only                               |                                                         |
| Social Links url                    | String    | URL                                                      | .footer-social-links ul li a[href]    |                                                         |

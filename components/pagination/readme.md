# Pagination

Pagination provides an easy way to navigate large ordered lists without lots of scrolling. It splits web content into numbered pages.

People can select a number to see another page. They can also select an arrow to move through pages.

Pagination always shows the first and last page in the series. It automatically shows links to previous and next pages in the series. Selecting a number or arrow shows new content without reloading the webpage.

## When and how to use it

Use the component wherever a long list of content could benefit from paged navigation. If you have more than 10 items, use pagination.

Pagination works well with:

- A list of announcements or press releases
- Search results
- A glossary

### How not to use it

Do not use pagination:

- To break up long pages of text
- For content that is not in an ordered list (for example, by date or relevancy)
- For a list of steps

## Demo and sample markup

<html-preview>

```html preview
<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>
```

</html-preview>

## Specs

| Property     | Value                 |
| ------------ | --------------------- |
| Machine name | ds-pagination         |
| JavaScript   | yes                   |
| SCSS         | ./src/scss/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-pagination`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **sample markup** to your HTML.
5. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.
6. If directly importing, be sure to reference the js file at `./dist/index.js`
7. Connect pagination to content block

### **Event registration**

The component tracks the current page and triggers custom events on page clicks. You can subscribe to events on this element to watch for clicks. This element does not modify outside content, responding to events and changing body content as desired is left up to your application logic. The following event format is sent on click:

`new CustomEvent("paginationClick", { detail: currentPage, })`

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that each pagination link has appropriate `aria-label`.
- make sure that pagination component is contained within `nav` tag and has `aria-label="Pagination”` added to it.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Data attributes

This component accepts attributes for the number of pages and current page. These changes are monitored and the component re-renders if these attributes change:

- `data-current-page="5"`
- `data-total-pages="99"`

It also accepts optional strings for all the text so it can be used in multiple languages:

- `data-previous="Previous"`
- `data-next="Next"`
- `data-page="Page"`

## Progressive enhancement

This component uses a custom element defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). If the JavaScript for this component is not delivered or supported, the component will not display. This component does not currently perform the desired progressive enhancement because it is critical to site interaction. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

@todo

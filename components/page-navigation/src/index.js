import styles from '../index.css';

/**
 * Page Navigation web component
 *
 * @element cagov-page-navigation
 *
 * @attr {string} [data-selector] - "main";
 * @attr {string} [data-type] - "wordpress";
 * @attr {string} [data-label] - "On this page";
 */

class CAGovPageNavigation extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-navigation-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-navigation-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.type = 'wordpress';

    if (this.type === 'wordpress') {
      document.addEventListener('DOMContentLoaded', () =>
        this.buildContentNavigation(),
      );
    }
    if (
      document.readyState === 'complete' ||
      document.readyState === 'loaded'
    ) {
      this.buildContentNavigation();
    }
  }

  buildContentNavigation() {
    // Parse header tags
    const markup = this.getHeaderTags();
    let label = null;
    if (markup !== null) {
      label = this.dataset.label || 'On this page';
    }
    let content = null;
    if (markup !== null) {
      content = `<nav aria-labelledby="page-navigation-label"> <div id="page-navigation-label" class="label">${label}</div> ${markup}</nav>`;
    }

    this.template({ content }, 'wordpress');
  }

  template(data, type) {
    if (data !== undefined && data !== null && data.content !== null) {
      if (type === 'wordpress') {
        this.innerHTML = `${data.content}`;
      }
    }

    return null;
  }

  renderNoContent() {
    this.innerHTML = '';
  }

  getHeaderTags() {
    const { selector } = this.dataset;
    // const { editor } = this.dataset;
    // const { label } = this.dataset;
    // let display = this.dataset.display;
    const display = 'render';
    // const { callback } = this.dataset; // Editor only right now

    const h = ['h2'];
    for (let i = 0; i < h.length; i += 1) {
      // Pull out the header tags, in order & render as links with anchor tags
      // auto convert h tags with tag names
      if (selector !== undefined && selector !== null) {
        if (display === 'render') {
          const selectorContent = document.querySelector(selector);
          if (selectorContent !== null) {
            const outline = CAGovPageNavigation.outliner(selectorContent);
            return outline;
          }
        }
      }
    }
    return null;
  }

  static outliner(content) {
    const headers = content.querySelectorAll('h2');
    let output = '';
    if (headers !== undefined && headers !== null && headers.length > 0) {
      headers.forEach((tag) => {
        const tagId = tag.getAttribute('id');
        const tagName = tag.getAttribute('name');

        const title = tag.innerHTML;

        let anchorLabel = null;

        // If id not set already, create an id to jump to.
        if (tagId) {
          anchorLabel = tagId;
        } else if (tagName) {
          anchorLabel = tagName;
        } else {
          anchorLabel = tag.innerHTML;
        }

        // Convert anchor label content to remove breaking characters.
        const anchor = anchorLabel
          .toLowerCase()
          .trim()
          .replace(/ /g, '-')
          // Strip out unallowed CSS characters (Selector API is used with the anchor links)
          // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;,
          // <, =, >, ?, @, [, \, ], ^, `, {, |, }, and ~.
          .replace(
            /\(|\)|!|"|#|\$|%|&|'|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\]|\\|\^|`|\{|\||\|\}|~/g,
            '',
          )
          // All other characters are encoded and decoded using encodeURI/decodeURI
          // which escapes UTF-8 characters.
          // If we want to do this with allowed characters only
          // .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9/g,"")
          // Alt: [a-zA-Z\u00C0-\u017F]+,\s[a-zA-Z\u00C0-\u017F]+
          .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g, '');

        output += `<li><a data-page-navigation href="#${encodeURI(
          anchor,
        )}">${title}</a></li>`;

        tag.setAttribute('id', anchor);
        tag.setAttribute('name', anchor);
      });
      return `<ul>${output}</ul>`;
    }
    return null;
  }
}

window.customElements.define('cagov-page-navigation', CAGovPageNavigation);

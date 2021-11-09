import templateHTML from './template.js';
import styles from './css/index.css';

/**
 * Pagination web component
 *
 * @element cagov-pagination
 *
 * @fires paginationClick - custom event with object with detail value of current page: {detail: 1}
 *
 * @attr {string} [data-yes] - "Yes";
 * @attr {string} [data-no] - "No";
 *
 * @cssprop --primary-color - Default value of #064E66, used for text, border color
 */
export class CAGovPagination extends window.HTMLElement {
  constructor() {
    super();
    if (document.querySelector('api-viewer')) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
    }
  }

  // add jsdoc event
  // add jsdoc event to feedback too

  connectedCallback() {
    this.currentPage = parseInt(
      this.dataset.currentPage ? this.dataset.currentPage : '1',
      10,
    );
    this.render();
  }

  render() {
    const previous = this.dataset.previous ? this.dataset.previous : '&#60;';
    const next = this.dataset.next ? this.dataset.next : '&#62;';
    const page = this.dataset.page ? this.dataset.page : 'Page';
    this.totalPages = this.dataset.totalPages ? this.dataset.totalPages : '1';
    const html = templateHTML(
      next,
      previous,
      page,
      this.currentPage,
      this.totalPages,
    );
    this.innerHTML = html;
    this.applyListeners();
  }

  static get observedAttributes() {
    return ['data-current-page', 'data-total-pages'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-current-page') {
      this.currentPage = parseInt(newValue, 10);
      this.render();
    }
  }

  applyListeners() {
    const pageLinks = this.querySelectorAll('.cagov-pagination__button');
    pageLinks.forEach((pl) => {
      pl.addEventListener('click', (event) => {
        this.currentPage = parseInt(event.target.dataset.pageNum, 10);
        this.dispatchEvent(
          new CustomEvent('paginationClick', {
            detail: this.currentPage,
          }),
        );
        this.dataset.currentPage = this.currentPage;
      });
    });
    this.querySelector('.cagov-pagination__previous-page').addEventListener(
      'click',
      (event) => {
        if (
          !event.target.classList.contains('cagov-pagination__link-inactive')
        ) {
          this.currentPage -= 1;
          if (this.currentPage < 1) {
            this.currentPage = 1;
          }
          this.dispatchEvent(
            new CustomEvent('paginationClick', {
              detail: this.currentPage,
            }),
          );
          this.dataset.currentPage = this.currentPage;
        }
      },
    );
    this.querySelector('.cagov-pagination__next-page').addEventListener(
      'click',
      (event) => {
        if (
          !event.target.classList.contains('cagov-pagination__link-inactive')
        ) {
          this.currentPage += 1;
          if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
          }
          this.dispatchEvent(
            new CustomEvent('paginationClick', {
              detail: this.currentPage,
            }),
          );
          this.dataset.currentPage = this.currentPage;
        }
      },
    );
  }
}
window.customElements.define('cagov-pagination', CAGovPagination);
const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);

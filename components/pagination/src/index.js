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
    const style = document.createElement("style");
    style.textContent = styles;
    document.querySelector('head').appendChild(style);
    if (document.querySelector('api-viewer')) {
      let link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
    }
  }

  // add jsdoc event
  // add jsdoc event to feedback too

  connectedCallback() {
    this.currentPage = parseInt(this.dataset.currentPage ? this.dataset.currentPage : "1");
    this.render();
  }

  render() {
    let previous = this.dataset.previous ? this.dataset.previous : "Previous";
    let next = this.dataset.next ? this.dataset.next : "Next";
    let page = this.dataset.page ? this.dataset.page : "Page";
    let totalPages = this.dataset.totalPages ? this.dataset.totalPages : "1";
    let html = templateHTML(
      next,
      previous,
      page,
      this.currentPage,
      totalPages
    );
    this.innerHTML = html;
    this.applyListeners();
  }

  static get observedAttributes() {
    return ['data-current-page', 'data-total-pages'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name)
    console.log(newValue)
    if (name === 'data-current-page') {
      this.currentPage = parseInt(newValue);
      this.render();
    }
  }

  applyListeners() {
    let pageLinks = this.querySelector(".cagov-pagination__button");
    pageLinks.forEach(function(pl) {
      pl.addEventListener("click", (event) => {
        this.dispatchEvent(
          new CustomEvent("paginationClick", {
            detail: parseInt(event.target.dataset.pageNum),
          })
        );
      });  
    })
    this.querySelector('.cagov-pagination__previous-page').addEventListener("click", (event) => {
      if(!event.target.classList.contains('cagov-pagination__link-inactive')) {
        this.dispatchEvent(
          new CustomEvent("paginationClick", {
            detail: this.currentPage - 1,
          })
        );
      }
    });
    this.querySelector('.cagov-pagination__next-page').addEventListener("click", (event) => {
      if(!event.target.classList.contains('cagov-pagination__link-inactive')) {
        this.dispatchEvent(
          new CustomEvent("paginationClick", {
            detail: this.currentPage + 1,
          })
        );  
      }
    });
  }
}
window.customElements.define('cagov-pagination', CAGovPagination);
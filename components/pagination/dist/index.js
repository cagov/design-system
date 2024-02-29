function pageListItem(label, number) {
  return `<li class="cagov-pagination__item">
    <a
      href="javascript:void(0);"
      class="cagov-pagination__button"
      aria-label="${label} ${number}"
      data-page-num="${number}"
    >
      ${number}
    </a>
  </li>`;
}

function pageOverflow() {
  return `<li
    class="cagov-pagination__item cagov-pagination__overflow"
  >
    <span> … </span>
  </li>`;
}

function templateHTML(next, previous, page, currentPage, totalPages) {
  return `<nav aria-label="Pagination" class="cagov-pagination">
    <ul class="cagov-pagination__list">
      <li class="cagov-pagination__item">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__link cagov-pagination__previous-page"
          aria-label="${previous} ${page}"
        >
          <span class="cagov-pagination__link-text ${
            currentPage > 2 ? '' : 'cagov-pagination__link-inactive'
          }"> ${previous} </span>
        </a>
      </li>
      ${currentPage > 2 ? pageListItem(page, 1) : ''}

      ${currentPage > 3 ? pageOverflow() : ''}

      ${currentPage > 1 ? pageListItem(page, currentPage - 1) : ''}

      <li class="cagov-pagination__item cagov-pagination-current">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__button"
          aria-label="Page ${currentPage}"
          aria-current="page"
          data-page-num="${currentPage}"
        >
          ${currentPage}
        </a>
      </li>

      ${currentPage < totalPages ? pageListItem(page, currentPage + 1) : ''}

      ${currentPage < totalPages - 3 ? pageOverflow() : ''}

      ${currentPage < totalPages - 1 ? pageListItem(page, totalPages) : ''}

      <li class="cagov-pagination__item">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__link cagov-pagination__next-page"
          aria-label="${next} ${page}"
        >
          <span class="cagov-pagination__link-text ${
            currentPage > totalPages - 1
              ? 'cagov-pagination__link-inactive'
              : ''
          }"> ${next} </span>
        </a>
      </li>
    </ul>
  </nav>`;
}

var styles =
  'cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: var(--border-1, 1px) solid var(--gray-100, #ededef);\n  border-radius: var(--radius-2, 4px);\n  margin: var(--s-sm, 0.25rem);\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-700, #165ac2);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item a:hover {\n  color: var(--primary-900, #003588);\n  background: var(--gray-50, #fafafa);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item a:focus {\n  color: var(--primary-900, #003588);\n  background: var(--gray-50, #fafafa);\n  outline: var(--border-2) solid var(--accent2-500);\n  outline-offset: 2px;\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #165ac2;\n  background-color: var(--primary-700, #165ac2);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: var(--white, #ffffff);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a:hover {\n  background-color: var(--primary-900, 3588);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n  color: var(--white, #ffffff);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a:focus {\n  background-color: var(--primary-900, 3588);\n  border-color: var(--primary-900, 3588);\n  outline: var(--border-2) solid var(--accent2-500);\n  outline-offset: 2px;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

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
 * @cssprop --primary-700 - Default value of #165ac2, used for text, border color
 */
class CAGovPagination extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-pagination-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-pagination-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

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

export { CAGovPagination };

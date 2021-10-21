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
    role="presentation"
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
          <span class="cagov-pagination__link-text ${(currentPage > 2) ? '' : 'cagov-pagination__link-inactive'}"> ${previous} </span>
        </a>
      </li>
      ${(currentPage > 2) ? pageListItem(page, 1) : ''}

      ${(currentPage > 3) ? pageOverflow() : ''}

      ${(currentPage > 1) ? pageListItem(page, currentPage - 1) : ''}

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

      ${(currentPage < totalPages) ? pageListItem(page, currentPage + 1) : ''}

      ${(currentPage < totalPages - 3) ? pageOverflow() : ''}

      ${(currentPage < totalPages - 1) ? pageListItem(page, totalPages) : ''}

      <li class="cagov-pagination__item">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__link cagov-pagination__next-page"
          aria-label="${next} ${page}"
        >
          <span class="cagov-pagination__link-text ${(currentPage > totalPages - 1) ? 'cagov-pagination__link-inactive' : ''}"> ${next} </span>
        </a>
      </li>
    </ul>
  </nav>`;
}

export default templateHTML;

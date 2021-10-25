function placePdfIcons() {
  // pdf-icon component svg icon
  const pdf = '<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/><path d="M5,9.3c0,0.8-1.2,0.8-1.2,0C3.8,8.5,5,8.5,5,9.3z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>';

  // selector is looking for links with pdf extension in the href
  const pdfLink = document.querySelectorAll("a[href*='.pdf']");
  for (let i = 0; i < pdfLink.length; i += 1) {
    pdfLink[i].innerHTML += pdf; // += concatenates to pdf links
    // Fixing search results PDF links
    if (pdfLink[i].innerHTML.indexOf('*PDF (this is a pdf file)*') !== -1) {
      pdfLink[i].innerHTML += pdf.replace(/PDF (this is a pdf file)]/g, ''); // += concatenates to pdf links
    }
  }
}

placePdfIcons();

var styles = "/* PDF Icon */\n.pdf-link-icon {\n  display: inline-block;\n  outline: 1px solid;\n  outline-offset: -2px;\n  padding: 0;\n  position: relative;\n  left: 1px;\n  top: -3px;\n  line-height: 0.9rem;\n  text-decoration: none;\n}\n.pdf-link-icon svg path {\n  fill: var(--primary-700, #004abc);\n}\n\n/* External link icon */\n.external-link-icon {\n  display: inline-block;\n  padding: 0;\n  position: relative;\n  left: 3px;\n  margin-right: 2px;\n  top: 1px;\n  text-decoration: none;\n  width: 0.8em;\n}\n.external-link-icon svg path {\n  fill: var(--primary-700, #004abc);\n}\n\nmain a:hover .external-link-icon svg path,\n.site-footer a:hover .external-link-icon svg path,\n.agency-footer a:hover .external-link-icon svg path {\n  fill: var(--primary-900, #003484);\n}\n\nfooter a .external-link-icon svg path {\n  fill: var(--black, #000);\n}\n\n/* External link icon exceptions */\n.cagov-card .external-link-icon,\n.wp-block-button__link .external-link-icon,\n.footer-social-links a .external-link-icon,\nimg ~ .external-link-icon,\nsvg ~ .external-link-icon,\n.pdf-link-icon ~ .external-link-icon {\n  display: none;\n}\n\n.sr-only {\n  height: unset !important;\n  text-indent: -10000px;\n  width: unset !important;\n  clip: rect(0, 0, 0, 0) !important;\n  border: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/* PDF ICON */

if (!document.querySelector('#cagov-link-icon-styles')) {
  const style = document.createElement('style');
  style.id = 'cagov-link-icon-styles';
  style.textContent = styles;
  document.querySelector('head').appendChild(style);
}

function placePdfIcons() {
  // pdf-icon component svg icon
  const pdf =
    '<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>';

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

/* EXTERNAL LINK ICON */
function linkAnnotator() {
  const ext =
    '<span class="external-link-icon" aria-hidden="true"><svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M1.4,13.3c0-1.9,0-3.8,0-5.7c0-2.3,1.3-3.6,3.7-3.7c2,0,3.9,0,5.9,0c0.9,0,1.4,0.4,1.4,1.1c0,0.7-0.5,1.1-1.5,1.1 c-2,0-3.9,0-5.9,0c-1.1,0-1.4,0.3-1.4,1.5c0,3.8,0,7.6,0,11.3c0,1.1,0.4,1.5,1.5,1.5c3.8,0,7.6,0,11.3,0c1.1,0,1.4-0.3,1.4-1.5 c0-1.9,0-3.9,0-5.8c0-1,0.4-1.5,1.1-1.5c0.7,0,1.1,0.5,1.1,1.5c0,2,0,4,0,6.1c0,2-1.4,3.4-3.4,3.4c-4,0-7.9,0-11.9,0 c-2.1,0-3.4-1.4-3.4-3.4C1.4,17.2,1.4,15.2,1.4,13.3L1.4,13.3z"/><path d="M19.6,2.8c-1.3,0-2.5,0-3.6,0c-0.9,0-1.4-0.4-1.4-1.1c0.1-0.8,0.6-1.1,1.3-1.1c2.1,0,4.2,0,6.2,0c0.8,0,1.2,0.5,1.2,1.3 c0,2,0,4.1,0,6.2c0,0.9-0.4,1.4-1.1,1.4c-0.7,0-1.1-0.5-1.1-1.4c0-1.1,0-2.3,0-3.6c-0.3,0.3-0.6,0.5-0.8,0.7c-3,3-6,6-8.9,8.9 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5,0.5-1.1,0.5-1.6,0c-0.5-0.5-0.4-1,0-1.5c0.1-0.2,0.3-0.3,0.5-0.5c3-3,6-6,8.9-8.9 C19,3.4,19.2,3.2,19.6,2.8L19.6,2.8z"/></svg></span>';

  // Check if link is external function
  function linkIsExternal(linkElement) {
    return window.location.host.indexOf(linkElement.host) > -1;
  }

  // Looping thru all links inside of the main content body, agency footer and statewide footer
  const externalLink = document.querySelectorAll(
    'main a, .agency-footer a, .site-footer a, footer a',
  );
  externalLink.forEach((element) => {
    const anchorLink = element.href.indexOf('#') === 0;
    const localHost = element.href.indexOf('localhost') > -1;
    const localEmail = element.href.indexOf('@') > -1;
    const linkElement = element;
    if (
      linkIsExternal(linkElement) === false &&
      !anchorLink &&
      !localEmail &&
      !localHost
    ) {
      linkElement.innerHTML += ext; // += concatenates to external links
    }
  });
}

linkAnnotator();

export { linkAnnotator, placePdfIcons };

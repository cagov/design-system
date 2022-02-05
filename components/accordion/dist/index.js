var styles = "/* v3 styles: new section */\ncagov-accordion details {\n  border-radius: 0.3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: 0.5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion:defined details {\n  transition: height 0.2s;\n  height: 3rem;\n  overflow: hidden;\n}\n\n/* let it be open initially if details has open attribute */\ncagov-accordion:defined details[open] {\n  height: auto;\n}\n\ncagov-accordion:defined summary::-webkit-details-marker {\n  display: none;\n}\n\ndetails summary {\n  cursor: pointer;\n  padding: 0 0 0 1rem;\n  background-color: #ededef;\n  position: relative;\n  line-height: 3rem;\n  margin: 0;\n  color: var(--primary-color, #064e66);\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion:defined details summary {\n  list-style: none;\n  /* hide default expansion triangle after js executes */\n  border-radius: 5px 5px 0 0;\n}\n\ncagov-accordion:defined details summary:focus {\n  outline-offset: -2px;\n  outline: solid 2px var(--highlight-color, #fbad23) !important;\n}\n\ndetails .accordion-body {\n  padding: 0 0 1rem 1rem;\n}\n\ncagov-accordion:defined details .cagov-open-indicator {\n  background-color: var(--primary-color, #064e66);\n  height: 6px;\n  width: 26px;\n  border-radius: 3px;\n  position: absolute;\n  right: 1rem;\n  top: 1.2rem;\n}\n\ncagov-accordion:defined details .cagov-open-indicator:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  left: 5px;\n  width: 2px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n  box-shadow: 7px -12px 0 2px var(--primary-color, #064e66);\n  background: none;\n}\n\ncagov-accordion:defined details[open] .cagov-open-indicator:before {\n  display: none;\n}\n\n/* legacy */\n/* accordion component specific classes */\ncagov-accordion .cagov-accordion-card {\n  border-radius: 0.3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: 0.5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion .accordion-title {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--primary-color, #064e66);\n  margin-right: auto;\n  width: 90%;\n  padding: 0 0.5rem 0 0 !important;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container {\n  height: 0px;\n  transition: height 0.3s ease;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container .card-body {\n  padding-left: 1rem;\n  margin-top: 8px;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container .card-body ul {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.accordion-title h4,\n.accordion-title h3,\n.accordion-title h2 {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n  color: var(--primary-color, #064e66);\n  text-align: left !important;\n}\n\nbutton.accordion-card-header:hover {\n  background-color: var(--hover-color, #f9f9fa);\n}\n\nbutton.accordion-card-header:hover .accordion-title {\n  text-decoration: underline;\n}\n\nbutton.accordion-card-header:hover .accordion-title:hover {\n  text-decoration: underline;\n}\n\nbutton.accordion-card-header:focus {\n  outline-offset: -2px;\n}\n\n@media only screen and (max-width: 767px) {\n  .accordion-alpha-open + .accordion-card-container {\n    height: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Accordion web component that collapses and expands content inside itself on click.
 *
 * @element cagov-accordion
 *
 *
 * @fires click - Default events which may be listened to in order to discover most popular accordions
 *
 * @attr {string} open - set on the internal details element
 * If this is true the accordion will be open before any user interaction.
 *
 * @cssprop --primary-color - Default value of #1f2574, used for all colors of borders and fills
 * @cssprop --hover-color - Default value of #F9F9FA, used for background on hover
 *
 */
class CaGovAccordion extends window.HTMLElement {
  connectedCallback() {
    this.summaryEl = this.querySelector('summary');
    // trigger the opening and closing height change animation on summary click
    this.summaryEl.addEventListener('click',this.listen.bind(this));
    this.summaryEl.insertAdjacentHTML('beforeend',`<div class="cagov-open-indicator" aria-hidden="true" />`);
                       
    this.detailsEl = this.querySelector('details');
    this.bodyEl = this.parentNode.querySelector('.accordion-body');
    // apply initial height
    if(this.detailsEl.hasAttribute('open')) {
      // if open get scrollHeight
      this.detailsEl.style.height = `${parseInt(this.bodyEl.scrollHeight + 48, 10)}px`;
    } else {
      // else apply 3.1rem
      this.detailsEl.style.height = `3.1rem`;
    }
  }
  
  listen() {
    if(this.detailsEl.hasAttribute('open')){
      // was open, now closing
      this.detailsEl.style.height = `3.1rem`;
    } else {
      // was closed, opening
      requestAnimationFrame(() => { // delay so the desired height is readable in all browsers
        console.log(this.bodyEl.scrollHeight);    
        this.detailsEl.style.height = `${parseInt(this.bodyEl.scrollHeight + 48, 10)}px`;
      });
    }
  }
}
window.customElements.define('cagov-accordion', CaGovAccordion);

const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);

export { CaGovAccordion };

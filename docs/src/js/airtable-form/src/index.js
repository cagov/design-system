import CaGovAirtableFormSubmit from './cagov-airtable.form.js';
/**
 * Airtable form web component
 *
 * @element cagov-airtable-form
 */
class CaGovAirtableForm extends window.HTMLElement {
  constructor() {
    super();
    const defaultOptions = {
      parentSelector: 'cagov-airtable-form',
      formSelector: 'cagov-airtable-form form',
      responseSelector: 'cagov-airtable-form .response',
      formFieldSelector: '.form-field [data-airtable-field]',
      formSubmitSelector: '.airtable-form-submit[data-airtable-form-id]',
    };

    this.options = {
      ...defaultOptions,
      endpoint: this.dataset.airtableServiceEndpoint || null,
      database: this.dataset.airtableDatabase || null,
      table: this.dataset.airtableTable || null,
      responseSuccess: this.dataset.responseSuccess || null,
      responseError: this.dataset.responseError || null,
    };
  }

  connectedCallback() {
    // Set up on submit handler
    // Get dataset variables

    const submitForm = this.submitForm.bind(this);
    // This will work with just one form element per page.
    document
      .querySelector('cagov-airtable-form .airtable-form-submit')
      .addEventListener(
        'click',
        async (e) => {
          e.preventDefault();
          submitForm();
        },
        false,
      );
  }

  async submitForm() {
    const serverResponse = await CaGovAirtableFormSubmit.init(this.options);
    console.log(serverResponse);
    document.querySelector(this.options.responseSelector).innerHTML =
      this.options.responseSuccess;
    document.querySelector(this.options.formSelector).innerHTML = "";
  }
}

window.customElements.define('cagov-airtable-form', CaGovAirtableForm);

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
      .querySelector('cagov-airtable-form form .airtable-form-submit')
      .addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          submitForm();
        },
        false,
      );
  }

  submitForm() {
    console.log('submit form this', this.options);
    CaGovAirtableFormSubmit.init(this.options);
  }
}

window.customElements.define('cagov-airtable-form', CaGovAirtableForm);

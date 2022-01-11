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
      formFieldSelector:
        'cagov-airtable-form form .form-field[data-airtable-field]',
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
    document.querySelector('#airtable-form-submit').addEventListener(
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

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
          try {
            if (e.target.classList.contains('form-submitted') === false) {
              submitForm(e);
            } else {
              console.log('Form already submitted');
            }
          } catch (error) {
            console.error('Error submitting form', error);
          } finally {
            console.log('Form submission cycle complete');
          }
        },
        false,
      );
  }

  async submitForm(e) {
    e.target.classList.add('inactive', 'form-submitted');

    const serverResponse = await CaGovAirtableFormSubmit.init(this.options);
    // console.log("serverResponse", serverResponse);

    if (serverResponse && serverResponse.complete === true) {
      document.querySelector(this.options.formSelector).innerHTML = '';
      document.querySelector(this.options.responseSelector).innerHTML =
        this.options.responseSuccess;
      document
        .querySelector(this.options.responseSelector)
        .classList.add('form-responded');
    } else {
      // Required fields not filled out, reset form classes
      e.target.classList.remove('inactive', 'form-submitted');
    }
  }
}

window.customElements.define('cagov-airtable-form', CaGovAirtableForm);

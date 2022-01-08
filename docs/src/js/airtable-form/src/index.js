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

// Notes

// .env variables
// AIRTABLE_API_KEY
// Variables
// AIRTABLE_DB
// AIRTABLE_TABLE
// FIELDS
// URL to view results
// Version of form

// Code snippets

// Docs for creating a light, accessible and performant Airtable form backend.
// Create a new airtable database
// Create a new table
// Name the fields in the table to match your form
// Look up the app key and database name. Add these values to the data-attributes of the component.
// Pick a good name for the table and then lock it so no one renames it. Agree on it as a team.

// Create a new record

//   curl -v -X POST https://api.airtable.com/v0/app4B5KqaCTSHAdCS/01%20-%20Design%20System%20Launch \
//   -H "Authorization: Bearer YOUR_API_KEY" \
//   -H "Content-Type: application/json" \
//   --data '{
//   "records": [
//     {
//       "fields": {}
//     },
//     {
//       "fields": {}
//     }
//   ]
// }'

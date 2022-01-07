/**
 * Airtable form web component
 *
 * @element cagov-airtable-form
 */
class CaGovAirtableForm extends window.HTMLElement {
  // .env variables
  // AIRTABLE_API_KEY
  // Variables
  // AIRTABLE_DB
  // AIRTABLE_TABLE
  // FIELDS
  // URL to view results
  // Version of form

  constructor() {
    super();
    const defaultOptions = {
      parentSelector: 'cagov-airtable-form',
      formFieldSelector: 'cagov-airtable-form form .form-field',
    };

    this.options = {
      ...defaultOptions,
    };

    this.state = {
      endpoint: this.dataset.airtableServiceEndpoint || null,
      database: this.dataset.airtableDatabase || null,
      table: this.dataset.airtableTable || null,
      success: this.dataset.responseSuccess || null,
      error: this.dataset.responseError || null,
    };
  }

  connectedCallback() {
    // Set up on submit handler
    // Get dataset variables
    window.cagovAirtableForm = {};
    window.cagovAirtableForm.getFieldData = this.getFieldData;
    window.cagovAirtableForm.validateFieldData = this.validateFieldData;
    window.cagovAirtableForm.postData = this.postData;

    document.querySelector('#airtable-form-submit').onclick = (e) => {
      e.preventDefault();
      window.cagovAirtableForm
        .getFieldData(this.options.formFieldSelector)
        .bind(this);
    };
  }

  getFieldData(formFieldSelector) {
    const formElements = document.querySelectorAll(formFieldSelector);
    let submit = true;
    const fields = {};
    Object.keys(formElements).map((index) => {
      const field = formElements[index];
      fields[field.name] = field.value;
      if (field.required === true) {
        if (this.validateFieldData(field) === false) {
          submit = false;
        }
      }
      return false;
    });
    if (submit) {
      // window.cagovAirtableForm.postData('https://localhost:3000', fields).then((data) => {
      //   console.log(
      //     'get response',
      //     'trigger submit success or try again later message',
      //   );
      //   console.log(data); // JSON data parsed by `data.json()` call
      // });
    }
    return false;
  }

  static async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  static validateFieldData(value) {
    if (value !== null) {
      return true;
    }
    return false;
  }
}
window.customElements.define('cagov-airtable-form', CaGovAirtableForm);

// Reference:
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

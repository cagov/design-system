const CaGovAirtableFormSubmit = {
  init: (options) => {
    const formFields = document.querySelectorAll(`${options.parentSelector} ${options.formFieldSelector}`);
    // console.log("options", options);
    console.log("formFields", formFields);
    let submit = true;
    const fields = {};
    Object.keys(formFields).map((index) => {
      const field = formFields[index];
      const airtableFieldName = field.getAttribute('data-airtable-field');
      fields[airtableFieldName] = field.value;
      if (field.required === true) {
        if (CaGovAirtableFormSubmit.validateFieldData(field) === false) {
          submit = false;
        }
      }
      return false;
    });

    if (submit) {
      const requestData = { options, fields };
      CaGovAirtableFormSubmit.postData(options.endpoint, requestData).then(
        (data) => {
          console.log(
            'get response',
            'trigger submit success or try again later message',
          );
          console.log("response data", data); // JSON data parsed by `data.json()` call
        },
      );
    }
    return false;
  },

  validateFieldData: (value) => {
    if (value !== null) {
      return true;
    }
    return false;
  },

  postData: async (url = '', data = {}) => {
    console.log('data', data);
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
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
    console.log(response);
    return { test: 'Test' };
    // return response.json(); // parses JSON response into native JavaScript objects
  },
};

module.exports = CaGovAirtableFormSubmit;

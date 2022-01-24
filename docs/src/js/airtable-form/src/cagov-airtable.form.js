const CaGovAirtableFormSubmit = {
  init: async (options) => {
    const formFields = document.querySelectorAll(
      `${options.parentSelector} ${options.formFieldSelector}`,
    );
    // console.log('formFields', formFields);
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
      try {
        return CaGovAirtableFormSubmit.postData(options.endpoint, requestData);
      } catch (error) {
        return {
          status: 500,
          body: {
            ok: false,
            message: 'Problem posting to Airtable from client',
            error,
          },
        };
      }
    }
    return false;
  },
  updateFormFeedback: () => {},

  validateFieldData: (value) => {
    if (value !== null) {
      return true;
    }
    return false;
  },

  postData: async (url = '', data = {}) => {
    // console.log('data', data, url);
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((body) => {
        console.log('data', body);
      })
      .catch((error) => console.error('error', error));
    console.log('response', response);
    // Forcing success until can sort out error response system with FaaS
    return {
      complete: true,
    };
  },
};

module.exports = CaGovAirtableFormSubmit;

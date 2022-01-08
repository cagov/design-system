const Airtable = require('airtable');
const { config } = require('dotenv');

const CreateAirtableRecord = {
  init: (data) => {
    const env = config();

    const AIRTABLE_API_KEY =
      env.parsed && env.parsed.AIRTABLE_API_KEY
        ? env.parsed.AIRTABLE_API_KEY
        : null; // @TODO process.env.AIRTABLE_API_KEY from server & password locker

    const { fields } = data;
    const { options } = data;
    console.log('AIRTABLE_API_KEY', AIRTABLE_API_KEY);
    // console.log("fields", fields);
    // console.log("options", options);

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      options.database,
    );

    console.log('base', options.table);

    base(options.table).create(
      [
        {
          fields,
        },
      ],
      (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          console.log(record.getId());
        });
      },
    );
  },
};
module.exports = CreateAirtableRecord;

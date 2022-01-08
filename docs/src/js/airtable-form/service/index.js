const http = require('http');
const CreateAirtableRecord = require('./create-airtable-record.js');

const server = http.createServer((request, response) => {
  //   console.dir(request.param);

  if (request.method === 'POST') {
    console.log('POST');
    let body = '';

    request.on('data', async (data) => {
      body += data;
      console.log('body', body);
      const airtablePost = await CreateAirtableRecord.init(JSON.parse(body));
      console.log('airtablePost', airtablePost);

      console.log('writing success');
      const jsonSuccess = {
        method: 'POST',
        message: 'Submitted to airtable',
        data,
      };
      response.writeHead(200, { 'Content-Type': 'text/json' });
      response.end(JSON.stringify(jsonSuccess));
    });

    // request.on('end', async () => {
    //   console.log("data", body);

    // });
  } else {
    console.log('GET');
    const json = {
      method: 'GET',
      message: 'Get requests are not supported.',
    };
    response.writeHead(200, { 'Content-Type': 'text/json' });
    response.end(JSON.stringify(json));
  }
});

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);

// Take a request from an endpoint

/* 

* Form, POST params
* Post params
* Endpoint (FaaS endpoint, Lambda later)
    // Add functions into it
    // Set up endpoint
    // point at repo
    // airtable forms
    // API key (secret)
    // API special account with limited access
    // Trigger email on submit
    // Maybe: sync new entries
* 

on hit get POST params
transfer them to new API request
push to database

document


*/

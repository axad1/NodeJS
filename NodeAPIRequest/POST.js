const http = require('http');

// Create the request body
const postData = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
});

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};


let data = '';

const request = http.request(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(response.statusCode, data);
    });
});

request.on('error', (error) => {
    console.error(error);
});

// Write data to the request body
request.write(postData);

request.end();
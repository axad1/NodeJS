const http = require('http');

let data = '';

const request = http.get('http://jsonplaceholder.typicode.com/posts/1', (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(data);
    });
});

// Log errors if any occur
request.on('error', (error) => {
    console.error(error);
});

// End the request
request.end();
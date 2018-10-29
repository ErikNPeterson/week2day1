var https = require('https');   

function getHTML (options, callback) {

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    
// create a variable to store & append each chunk of data to
    var collectedData = "";

    response.on('data', function (data) {
      // send the chunk of data to variable 
      collectedData += data;
      // console.log(variableValue)
      callback(collectedData);
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML (requestOptions, printHTML);
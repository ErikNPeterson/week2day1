var https = require('https');   


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    
// create a variable to store & append each chunk of data to
    var collectedData = "";

    response.on('data', function (data) {
      // send the chunk of data to variable 
      collectedData += data;
      // console.log(variableValue)
      console.log('Data Received:', collectedData);
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTML();

// This function should use a buffering technique to append each chunk of
//  data to a variable as it is received, and then console.log 
//  the data once all of the data has been received.

// Buffering in this context means the technique you've used before 
// (usually in loops or conditionals) of creating an empty variable 
// and adding data to it.
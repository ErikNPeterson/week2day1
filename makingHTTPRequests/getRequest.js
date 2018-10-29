// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')     
       .on('error', function (err) {                                  
         throw err; 
       })
       .on('response', function (response) {                         
         console.log('Response Status Code: ', response.statusCode);
         console.log(response.statusMessage) 
         console.log('Downloading image...');
         console.log(response.headers['content-type']); // we use bracket notation because there is a "-" in the property/key
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function() {
        console.log('Download complete.')
        console.log('Response stream complete.');
      });

       // incorporate the following
      //  console.log('Downloading image...');
      //  console.log('Download complete.');

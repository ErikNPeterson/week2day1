var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);

// print_1337.js : Transforms the html string into 13375p34k (aka leetspeak, 
//   like how 'h4x0rs' talked in the 90s) - this is very similar to your password 
//   obfuscator from w1d1, with a few additional letters to substitute, and a 
//   few strings:

// a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r',
//  'you' : 'j00'
// The last three ('ck' : 'x', 'er' : '0r', 'you' : 'j00') may be tough, depending 
// on how you implement your solution. ('er' : '0r' is almost guaranteed to be an 
// issue, can you spot why?) Consider these stretch-on-stretch and don't get
//  behind if they give you trouble. You can always return to this later.
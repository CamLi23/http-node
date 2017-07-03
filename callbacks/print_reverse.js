const htmlFunctions = require('../printModule');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print_reverse(html) {
  const finalString = html.split("").reverse().join("");
  console.log(finalString);

}

htmlFunctions.getHTML(requestOptions, print_reverse);
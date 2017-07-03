const htmlFunctions = require('../printModule');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function print_uppercase(html) {
  const finalString = html.toUpperCase();
  console.log(finalString);

}

htmlFunctions.getHTML(requestOptions, print_uppercase);
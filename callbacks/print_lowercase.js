const htmlFunctions = require('../printModule');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function print_lowercase(html) {
  const finalString = html.toLowerCase();
  console.log(finalString);

}

htmlFunctions.getHTML(requestOptions, print_lowercase);
const htmlFunctions = require('./printModule');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

htmlFunctions.getHTML(requestOptions, htmlFunctions.printHTML);
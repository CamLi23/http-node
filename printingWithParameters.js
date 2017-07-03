const https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (res) {

    let rawData = '';
    res.on('data', function (chunk) {
      console.log('Chunk received. Length:', chunk.length);
      console.log(chunk);
      rawData = rawData + ' @ ' + chunk;
    });

    res.on('end', function () {
      console.log('Response stream');
      console.log(rawData);
    });

  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

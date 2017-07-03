const https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (res) {

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

getAndPrintHTML();
const https = require('https');

function getAndPrintHTMLChunks () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (res) {

    let rawData = '';
    res.on('data', function (chunk) {
      console.log('Chunk Received. Length:', chunk.length);
      console.log(chunk);
      rawData = rawData + '\n' + chunk;
      // console.log(rawData);
    });

    res.on('end', function() {
      console.log('Response stream');
      console.log(rawData);
    });
  });

}

getAndPrintHTMLChunks();
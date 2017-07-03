const https = require('https');

function getHTML (options, cb) {

  https.get(options, function (res) {

    let rawData = '';
    res.on('data', function (chunk) {
      console.log('Chunk received. Length:', chunk.length);
      console.log(chunk);
      rawData = rawData + ' @ ' + chunk;
    });

    res.on('end', function () {
      console.log('Response stream');
      cb(rawData);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

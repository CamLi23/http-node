

module.exports = {
  getHTML : function getHTML(options, cb) {
    const https = require('https');

      https.get(options, function (res) {

      let rawData = '';
      res.on('data', function (chunk) {
        console.log('Chunk received. Length:', chunk.length);
        console.log(chunk);
        rawData += /*rawData + ' @ ' +*/ chunk;
      });

      res.on('end', function () {
        console.log('Response stream');
        cb(rawData);
      });

    });
  },
  printHTML: function printHTML (html) {
    console.log(html);
  }
}


const fetch = require('cross-fetch');
const fs = require('fs');

fetch('https://script.google.com/macros/s/AKfycbyAt0P51_kpSkiQSn369oSLcmZUMtAWgEPvWVFcghh2UemYnr4/exec', {
  method: 'GET',
})
  .then((result) => result.json())
  .then((data = {
    GoogleSheetData: [],
  }) => {
    let vn = {};
    let en = {};
    if (data) {
      // write the file
      data.GoogleSheetData.map((g, index) => {
        if (index !== 0) {
          vn[g[0]] = g[1];
          en[g[0]] = g[2];
        }
      });
    }

    fs.writeFile(
      './i18n/vn.json',
      JSON.stringify(vn),
      (err) => {
        if (err) {
          console.error('Error writing vn.json', err);
        } else {
          console.log('successfully write vn.json!');
        }
      },
    );
    fs.writeFile(
      './i18n/en.json',
      JSON.stringify(en),
      (err) => {
        if (err) {
          console.error('Error writing en.json', err);
        } else {
          console.log('successfully write en.json!');
        }
      },
    );
  });

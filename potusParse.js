const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
    .then(function(html) {
        const $ = cheerio.load(html)
        console.log($('th > div.fn').text());
        console.log($('th:contains("Born") + td')[0]);
        console.log($('.bday').text())
    })
    .catch(function(err) {
        console.error(err);
    });




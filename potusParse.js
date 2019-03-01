const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

const potusParse = function(url) {
    return rp(url)
        .then(function(html) {
            const $ = cheerio.load(html)
            // console.log($('th > div.fn').text());
            return {
                name: $('.firstHeading').text(),
                birthday: $('.bday').text()
            };
        })
        .catch(function(err) {
            console.error(err);
        });
};

module.exports = potusParse;



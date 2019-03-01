const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');

const rootWikiUrl = 'https://en.wikipedia.org/';
const presidentsUrl = rootWikiUrl + 'wiki/List_of_Presidents_of_the_United_States';

rp(presidentsUrl)
    .then(function(html) {
        const wikiUrls = [];
        for (let i = 0; i < 45; i++) {
            wikiUrls.push($('big > a', html)[i].attribs.href);
        }
        return Promise.all(
            wikiUrls.map( (url) => potusParse(rootWikiUrl + url) )
        );        
    })
    .then( (presidents) => console.log(presidents) )
    .catch( (err) => console.error(err) );
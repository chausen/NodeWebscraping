const cheerio = require('cheerio');

const html = `<ul id="fruits">
                <li class="apple">Apple</li>
                <li class="orange">Orange</li>
                <li class="pear" color="yellow">Pear</li>
                <li class="honey-dew" color="blue">Honey Dew</li>
              </ul>`;

const $ = cheerio.load(html);

$('.apple', '#fruits').text();

$('ul .pear').attr('class');

$('[color]');

console.log(
  $('.apple').attr('id', 'favorite').html()
);


const handlebars = require('handlebars');
const fileReader = require('./fileReader');


function getRenderedTemplate(dir, template, data) {
  const test = fileReader.readFile(dir, template);
  var template = handlebars.compile(test, {strict: true});
  return template(data);
}

module.exports = {getRenderedTemplate};

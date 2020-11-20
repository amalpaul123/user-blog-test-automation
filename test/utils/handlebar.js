const handlebars = require('handlebars');
const fileReader = require('./fileReader');


function getRenderedTemplate(dir, templateName, data) {
  const test = fileReader.readFile(dir, templateName);
  var template = handlebars.compile(test, {strict: true});
  return template(data);
}

module.exports = {getRenderedTemplate};

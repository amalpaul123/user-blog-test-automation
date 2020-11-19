const handlebars = require('handlebars');
const fileReader = require('./fileReader');


function getRenderedTemplate(dir, template, data) {
  const src = fileReader.readFile(dir, template);
  var template = handlebars.compile(src, {strict: true});
  return template(data);
}

module.exports = {getRenderedTemplate};

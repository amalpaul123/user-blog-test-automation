const fs = require('fs');
const path = require('path');

function readFile(dir, fileName) {
  return fs.readFileSync(path.resolve(dir, fileName), 'utf8');
}

module.exports = {readFile};

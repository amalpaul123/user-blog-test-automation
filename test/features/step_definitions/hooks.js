var {BeforeAll} = require('@cucumber/cucumber');
const path = require('path');

BeforeAll(function () {
    global.__baseDir = path.resolve(__dirname, '../..');
    global.__templateDir = path.resolve(__baseDir, './builders/request/templates');
});

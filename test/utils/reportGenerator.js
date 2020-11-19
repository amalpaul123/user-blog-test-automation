const reporter = require('cucumber-html-reporter');
const path = require('path');
global.__baseDir = path.resolve(__dirname, '../..');
var options = {
        theme: 'bootstrap',
        jsonFile: `${__baseDir}/test/report/cucumber_report.json`,
        output: `${__baseDir}/test/report/cucumber_report.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
    };

reporter.generate(options);
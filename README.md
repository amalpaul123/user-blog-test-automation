# auto1-test-automation-selenium-bdd

# Project Summary

This framework uses BDD written in javascript using cucumber.js to test APIs

- ```"test > features"``` contains feature files written in Gherkin 
- ```"test/features > stepDefinitions"``` contains all the step definitions
- ```"test > config"``` contains configuration of api
- ```"test/builders/request > blog"``` contains files related to blogging resources
- ```"test > utils"``` contains helper files 
- ```"test > common"``` contains common logic 
- ```"test > reports"``` generated reports in json and html

*modules*
- ```"@cucumber/cucumber"``` to execute automated tests written in Gherkin
- ```"request-promise"``` to invoke requests by passing required paramters and getting response
- ```"handlebars"``` for templating
- ```"chai"``` chai.expect is used for assertion
- ```"cucumber-html-reporter"``` to generate html report from cucumber json report

**Requirements** 
- Node v12.14.1

*setup*
- Install latest node
- clone the repository
- navigate to the root directory of this repository using any terminal
- run npm install
 
 **Test Execution** - Running Via Command Line
 - Open ```terminal```
 - Goto ```Project directory```
 - to execute all test cases : 
 > 
 		- npm run test 
 
 - to do a sanity test(by hitting all resource endpoints once and checking status code) : 
 > 
 		- npm run sanity-test

 - to run regression (execute all feature files) : 
 > 
 		- npm run regression-test
    
 - to run tests on basis of tags : 
 > 
 		- npx cucumber-js test/features/*.feature -t @<tagname>

## Test Report: 
After execution, the test report can be found at
-```"test\report\cucumber_report.html"```
-```"test\report\cucumber_report.json"```
![ScreenShot](https://gist.githubusercontent.com/amalpaul123/38d9eedb603ef4ad790f4bd27e030cfc/raw/983d48c7dd413bec7916e10548df88fb47b444cc/test-report-blog.png)

## CircleCI pipeline: 
- This repository is integrated with circleCI tool for continous integration
[circleCI Job](https://app.circleci.com/pipelines/github/amalpaul123/user-blog-test-automation)
![ScreenShot](https://gist.githubusercontent.com/amalpaul123/38d9eedb603ef4ad790f4bd27e030cfc/raw/983d48c7dd413bec7916e10548df88fb47b444cc/circleCI-pipeline.png)

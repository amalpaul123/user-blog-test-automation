
var blogPage = require('../../builders/blog/getUsers')
var chai = require('chai');
var expect = chai.expect;
var {Given} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Then} = require('@cucumber/cucumber');
var apiResponse;

Given(/^the user details are feched successfully with statusCode(.*)$/, async  (statusCode) => {
  try{
  apiResponse = await blogPage.getUsers();
}
catch(e){
  apiResponse = e;
}
expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

});

When(/^Search for the user with username (.*)$/, async  (userName) => {
    try{
    apiResponse = await blogPage.getUser();
  }
  catch(e){
    apiResponse = e;
  }
});
Then(/^I should get status code (.*) correctly$/, (statusCode) => {
    expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');
  });





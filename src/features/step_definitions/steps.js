
const user = require('../../builders/blog/user/user');
const post = require('../../builders/blog/post/post');
const helper = require('../../utils/helper')
var chai = require('chai');
var expect = chai.expect;
var {Given} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Then} = require('@cucumber/cucumber');
var apiResponse;

Given(/^the userId is fetched successfully for the username (.*)$/, async  (userName) => {
  try{
  // apiResponse = await blogPage.getUsers();
  let userList = await user.getUsers();
  let userId = await user.getUserId(JSON.parse(userList.body),userName);
  helper.setGlobalVariable('userId',userId);

}
catch(e){
  console.log("errorr**********",e);
}
// expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

});

Given(/^the posts by the user (.*) are fetched successfuly$/, async  (user) => {
  try{
  let postList = await post.getPosts();
  var postId = await post.getUsersPostIds(JSON.parse(postList.body),helper.getGlobalVariable('userId'));

}
catch(e){
  apiResponse = e;
  console.log("errorr**********",e);
}
// expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

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





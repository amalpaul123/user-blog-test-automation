
const user = require('../../builders/blog/users/user');
const post = require('../../builders/blog/posts/post');
const comment = require('../../builders/blog/comments/comments');
const emailValidation = require('../../common/emailValidation');
const helper = require('../../utils/helper')
var chai = require('chai');
var expect = chai.expect;
var {Given} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Then} = require('@cucumber/cucumber');
var apiResponse;
var error = false;
//New 

Given(/^the userId is fetched successfully with status code (.*) for the user with (.*) as (.*)$/, async  (statusCode,key,value) => {
  try{
  // apiResponse = await blogPage.getUsers();
  let queryParam ={
    key: key,
    value:value,
  }
  apiResponse = await user.getUserByParam(queryParam);
  expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');

}
catch(e){
  error =true;
}
expect(error).to.be.deep.equal(false, 'error at this step');

helper.setGlobalVariable('userId',JSON.parse(apiResponse.body)[0].id);

});

Given(/^the posts are fetched successfully with status code (.*) for the user using the userId$/, async (statusCode) => {
  try{
  let queryParam ={
    key: "userId",
    value: helper.getGlobalVariable('userId'),
  }
   apiResponse = await post.getPostsByParam(queryParam);
   expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');

}
catch(e){
  error =true;
}
expect(error).to.be.deep.equal(false, 'error at this step');

helper.setGlobalVariable('posts',JSON.parse(apiResponse.body));

});

Given(/^get comments successfully with status code (.*) and validate if the emails in the comment section are in the proper format for each post$/, async (statusCode) => {
  try{

  let posts = helper.getGlobalVariable('posts');
  let queryParam ={}; 
  

  for (const post of posts){
    queryParam={
      key: "postId",
      value: post.id,
    }
    apiResponse =  await comment.getCommentsByParam(queryParam);
    let emails = await comment.getCommentsAttributeValue(JSON.parse(apiResponse.body),"emails");
       for(const email of emails){
        expect(email).to.be.a('string');
        expect(emailValidation.validate(email)).to.be.true;
       }
  }
  expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');
}
catch(e){
  error =true;
}
expect(error).to.be.deep.equal(false, 'error at this step');
});

Then(/^I should get status code (.*) correctly$/, (statusCode) => {
  expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');
});
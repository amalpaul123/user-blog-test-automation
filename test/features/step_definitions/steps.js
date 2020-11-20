
const user = require('../../builders/request/blog/users/user');
const post = require('../../builders/request/blog/posts/post');
const comments = require('../../builders/request/blog/comments/comment');
const emailValidation = require('../../common/emailValidation');
const uniqueField = require('../../common/getUniqueField');
const helper = require('../../utils/helper');
var chai = require('chai');
var expect = chai.expect;
var {Given} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Then} = require('@cucumber/cucumber');

Given(/^the userId is fetched successfully with status code (.*) for the user with (.*) as (.*)$/, async  (statusCode,key,value) => {
  let apiResponse, error=false;
  try{

  let queryParam ={
    key: key,
    value:value
  };
  apiResponse = await user.getUserByParam(queryParam);
  expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');

} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;

helper.setGlobalVariable('userId',JSON.parse(apiResponse.body)[0].id);

});

Given(/^the posts are fetched successfully with status code (.*) for the user using the userId$/, async (statusCode) => {
  let apiResponse, error=false;

  try{
  let queryParam ={
    key: 'userId',
    value: helper.getGlobalVariable('userId')
  };
   apiResponse = await post.getPostsByParam(queryParam);
   expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');

} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;

helper.setGlobalVariable('posts',JSON.parse(apiResponse.body));

});

Given(/^validate if the emails in the comment section fetched successfully with status code (.*) are in the proper format for each post$/, async (statusCode) => {
  let apiResponse, error=false;

  try{

  let posts = helper.getGlobalVariable('posts');
  let queryParam ={};

  for (const post of posts){
    queryParam={
      key: 'postId',
      value: post.id
    };
    apiResponse =  await comments.getCommentsByParam(queryParam);
    let emails = await uniqueField.getUniqueField(JSON.parse(apiResponse.body),'email');
       for(const email of emails){
        expect(email).to.be.a('string');
        expect(emailValidation.validate(email)).to.be.true;
       }
  }
  expect(apiResponse.statusCode).to.be.deep.equal(JSON.parse(statusCode), 'API returned invalid response');
} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;
});


Given(/^a request is made to users endpoint with (.*) as (.*)$/, async  (key,value) => {
  let apiResponse,error=false;

  try{

  let queryParam ={
    key: key,
    value:value
  };
  apiResponse = await user.getUserByParam(queryParam);
} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;
helper.setGlobalVariable('apiResponse',apiResponse);

});

Given(/^a request is made to posts endpoint with (.*) as (.*)$/, async  (key,value) => {
  let apiResponse,error=false;

  try{
  let queryParam ={
    key: key,
    value:value
  };
  apiResponse = await post.getPostsByParam(queryParam);
} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;
helper.setGlobalVariable('apiResponse',apiResponse);

});

Given(/^a request is made to comments endpoint with (.*) as (.*)$/, async  (key,value) => {
  let apiResponse,error=false;

  try{
  let queryParam ={
    key: key,
    value:value
  };
  apiResponse = await comments.getCommentsByParam(queryParam);
} catch(e){
  error = e;
}
expect(error,`error thrown at this step: ${error}`).to.be.false;

helper.setGlobalVariable('apiResponse',apiResponse);

});

Then(/^I should get status code (.*) correctly$/, (statusCode) => {
  let apiResponse = helper.getGlobalVariable('apiResponse');
  expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid status code');
});

Then(/^I should get an empty array$/, () => {
  let apiResponse = helper.getGlobalVariable('apiResponse');
  expect(JSON.parse(apiResponse.body)).to.be.an('array').that.is.empty;
});

Then(/^I should get a non empty array$/, () => {
  let apiResponse = helper.getGlobalVariable('apiResponse');
    expect(JSON.parse(apiResponse.body)).to.be.an('array').that.is.not.empty;
});

Then(/^the reponse should consist of mandatory field (.*)$/, (value) => {
  let apiResponse = helper.getGlobalVariable('apiResponse');
  expect((JSON.parse(apiResponse.body))[0].hasOwnProperty(value)).to.equal(true, `${value} is missing`);
});

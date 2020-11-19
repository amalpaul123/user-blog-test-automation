
const user = require('../../builders/blog/users/user');
const post = require('../../builders/blog/posts/post');
const comment = require('../../builders/blog/comments/comments');
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



//New 

Given(/^the userId is fetched successfully for the user with (.*) as (.*)$/, async  (key,value) => {
  try{
  // apiResponse = await blogPage.getUsers();
  let queryParam ={
    key: key,
    value:value,
  }
  let apiResponse = await user.getUserByParam(queryParam);
  helper.setGlobalVariable('userId',JSON.parse(apiResponse.body)[0].id);

}
catch(e){
  console.log("errorr**********",e);
}
// expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

});

Given(/^the posts are fetched successfully for the user using the userId$/, async () => {
  try{
  let queryParam ={
    key: "userId",
    value: helper.getGlobalVariable('userId'),
  }
  let apiResponse = await post.getPostsByParam(queryParam);
  helper.setGlobalVariable('posts',JSON.parse(apiResponse.body));

}
catch(e){
  console.log("errorr**********",e);
}
// expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

});

Given(/^validate if the emails in the comment section are in the proper format for each post$/, async () => {
  try{

  let posts = helper.getGlobalVariable('posts');
  let queryParam ={}; 
  

  for (const post of posts){
    queryParam={
      key: "postId",
      value: post.id,
    }
    let apiResponse =  await comment.getCommentsByParam(queryParam);
    let emails = await comment.getCommentsAttributeValue(JSON.parse(apiResponse.body),"emails");
       for(const email of emails){
        expect(email).to.be.a('string');
       }
  }

}
catch(e){
  console.log("errorr**********",e);
}
// expect(apiResponse.statusCode).to.equal(JSON.parse(statusCode), 'API returned invalid response');

});


const helperBuilder = require('../../builderHelper');
const path = require('path');
global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');
var postIds = [];
var i=0;
const getUsersPostIds = async (postList,userId) => {
 
    postList.forEach(() => {
        if(postList[i].userId == userId){
                postIds.push(postList[i].id);    
        }
    i++;
});

return postIds;
     
}
module.exports = {
    getUsersPostIds
};
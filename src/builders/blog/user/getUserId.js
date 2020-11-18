const helperBuilder = require('../../builder-helper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

var userId,i=0;
const getUserId = async (userList,userName) => {
    
    userList.forEach(() => {
        if(userList[i].username == userName){
                userId = userList[i].id;    
        }
    i++;
});

 return await userId;
    
}
module.exports = {
    getUserId
};
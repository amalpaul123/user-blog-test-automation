const helperBuilder = require('../../builder-helper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getCommentsAttributeValue = async (comments,attribute) => {
 let emails =[];

    for(const comment of comments){
        emails.push(comment.email);
    }
    return emails;
   
}
module.exports = {
    getCommentsAttributeValue
};
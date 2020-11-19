const helperBuilder = require('../../builder-helper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getCommentsByParam = async (queryParam) => {
    
    let url = `https://jsonplaceholder.typicode.com/comments?${queryParam.key}=${queryParam.value}`;

    let reqOpts = {
        url: url,
        method: "GET",
        headers: {

        },
        rejectUnauthorized: false
    };

    return await helperBuilder.invoke(reqOpts);
}
module.exports = {
    getCommentsByParam
};
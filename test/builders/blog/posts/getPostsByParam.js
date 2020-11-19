const helperBuilder = require('../../builderHelper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getPostsByParam = async (queryParam) => {
    let url = `https://jsonplaceholder.typicode.com/posts?${queryParam.key}=${queryParam.value}`;

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
    getPostsByParam
};
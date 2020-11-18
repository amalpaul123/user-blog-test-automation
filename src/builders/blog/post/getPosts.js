const helperBuilder = require('../../builder-helper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getPosts = async () => {
    // let url = `${pageUrl}';
    console.log("inside get posts************");
    let url = `https://jsonplaceholder.typicode.com/posts`;

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
    getPosts
};
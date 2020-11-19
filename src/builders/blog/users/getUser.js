const helperBuilder = require('../../builder-helper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getUser = async (userId) => {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

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
    getUser
};
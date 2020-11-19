
const helperBuilder = require('../builderHelper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getUsers = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;

    let reqOpts = {
        url: url,
        method: "GET",
        headers: {

        },
        rejectUnauthorized: false
    };

    return await helperBuilder.invoke(reqOpts);


}

const getUser = async (userName) => {
    // let url = `${pageUrl}';
    let url = `https://jsonplaceholder.typicode.com/users/${userName}`;

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
    getUser,getUsers
};

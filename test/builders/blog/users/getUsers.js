
const helperBuilder = require('../../builderHelper');
const path = require('path');

global.__baseDir = path.resolve(__dirname, '../..');
global.__templateDir = path.resolve(__dirname, '../templates/requests');

const getUsers = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    console.log("inside get users ************");
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
    getUsers
};

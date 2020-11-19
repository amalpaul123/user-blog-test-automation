const helperBuilder = require('../../builder-helper');
const path = require('path');

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
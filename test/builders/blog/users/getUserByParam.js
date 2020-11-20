const helperBuilder = require('../../builderHelper');
const hbr = require('../../../utils/handlebar')

const getUserByParam = async (queryParam) => {
    let url = `https://jsonplaceholder.typicode.com/users?${queryParam.key}=${queryParam.value}`;

    let inpForTemplate = {
        url: url
    };
    const reqOpts = JSON.parse(hbr.getRenderedTemplate(__templateDir,"get.hbs", inpForTemplate));
    return await helperBuilder.invoke(reqOpts);
}
module.exports = {
    getUserByParam
};
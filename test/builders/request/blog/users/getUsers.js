const request = require('../../requestBuilderHelper');
const hbr = require('../../../../utils/handlebar');
const url = require('../../../../config/config.json').url

const getUserByParam = async (queryParam) => {

    let uri = `${url.users}?${queryParam.key}=${queryParam.value}`;
      
    let inpForTemplate = {
        uri: uri
    };
    
    const reqOpts = JSON.parse(hbr.getRenderedTemplate(__templateDir,"get.hbs", inpForTemplate));
    return await request.invoke(reqOpts);
}

const getUserById = async (id) => {

    let uri = `${url.comments}/${id}`;

    let inpForTemplate = {
        uri: uri
    };
    const reqOpts = JSON.parse(hbr.getRenderedTemplate(__templateDir,"get.hbs", inpForTemplate));
    return await request.invoke(reqOpts);
}

module.exports = {
    getUserByParam,getUserById
};
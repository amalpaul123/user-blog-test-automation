const request = require('../../requestBuilderHelper');
const hbr = require('../../../../utils/handlebar');
const url = require('../../../../config/config.json').url;

const getCommentsByParam = async (queryParam) => {

    let uri = `${url.comments}?${queryParam.key}=${queryParam.value}`;

    let inpForTemplate = {
        uri: uri
    };
    const reqOpts = JSON.parse(hbr.getRenderedTemplate(__templateDir,'get.hbs', inpForTemplate));
    return await request.invoke(reqOpts);
};

const getCommentById = async (id) => {

    let uri = `${url.comments}/${id}`;

    let inpForTemplate = {
        uri: uri
    };
    const reqOpts = JSON.parse(hbr.getRenderedTemplate(__templateDir,'get.hbs', inpForTemplate));
    return await request.invoke(reqOpts);
};

module.exports = {
    getCommentsByParam,getCommentById
};

const requestPromise = require('request-promise');

module.exports = {
  invoke: async (options) => {

    options.resolveWithFullResponse = true;

    return await requestPromise(options);
  }
};

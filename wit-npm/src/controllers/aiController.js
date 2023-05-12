const { processUserData } = require('../services/aiService');
const {
  responseWithSuccess,
  responseWithError
} = require('../messages/apiResponse');

function getParamsIa (request, response) {
  try {
    const { message } = request.query;

    const responseIa = processUserData(message);
  
    return responseWithSuccess(response, responseIa);
  } catch (error) {
    return responseWithError(response, error);
  }
}

  module.exports = {
    getParamsIa,
  }
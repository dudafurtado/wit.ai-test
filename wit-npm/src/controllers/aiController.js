const { processUserData } = require('../services/aiService');
const {
  responseWithSuccess,
  responseWithError
} = require('../messages/apiResponse');

async function getParamsIa (request, response) {
  try {
    const { message } = request.body;
    console.log(message)

    const responseIa = await processUserData(message);
  
    return responseWithSuccess(response, responseIa);
  } catch (error) {
    return responseWithError(response, error);
  }
}

  module.exports = {
    getParamsIa,
  }
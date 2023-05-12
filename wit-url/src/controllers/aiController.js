const { 
  responseWithSuccess, 
  responseWithError 
} = require('../helpers/apiResponse');
const { getProcess } = require('../service/aiService');

async function processMessageToIa (req, res) {
  const { message, version } = req.body;

  try {
    const iaResponse = await getProcess(message, version);

    return responseWithSuccess(res, iaResponse.data);
  } catch (error) {
    return responseWithError(res, error);
  }
}

module.exports = {
  processMessageToIa,
}
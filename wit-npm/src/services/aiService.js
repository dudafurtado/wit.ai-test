const { Wit, log } = require('node-wit');

const token = process.env.SERVER_TOKEN

async function processUserData (message) {
  const actions = {
    confirm_order(contextMap) {
      return {context_map: {...contextMap, order_confirmation: 'PIZZA42'}};
    },
  };

  const client =  new Wit({
    accessToken: token,
    actions,
    logger: new log.Logger(log.DEBUG),
  });

  const aiResponse = client.message(message)

  return await aiResponse
}

module.exports = {
  processUserData,
}
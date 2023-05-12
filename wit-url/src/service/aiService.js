const { api } = require('./config');

const extraVersion = process.env.IA_VERSION;

async function getProcess (message, version) {
  return await api.get(`${url}?v=${version ? version : extraVersion}&q=${message}`)
}

module.exports = {
  getProcess,
}
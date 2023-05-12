const axios = require('axios');

const url = process.env.BASE_URL;
const token = process.env.SERVER_TOKEN;
const extraVersion = process.env.IA_VERSION;

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

async function getProcess (message, version) {
  return await api.get(`${url}?v=${version ? version : extraVersion}&q=${message}`)
}

module.exports = {
  getProcess,
}
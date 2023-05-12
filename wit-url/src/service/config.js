const axios = require('axios');

const url = process.env.BASE_URL;
const token = process.env.SERVER_TOKEN;

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

module.export = {
  api
}
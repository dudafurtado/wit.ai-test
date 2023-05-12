const express = require('express');
const app = express();

require('dotenv').config();

const { getParamsIa } = require('./controllers/aiController');

app.use(express.json());

app.get('/wit-npm', getParamsIa);

app.listen(process.env.PORT || 4000);
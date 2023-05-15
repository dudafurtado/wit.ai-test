const express = require('express');
const app = express();

require('dotenv').config();

const { getParamsIa } = require('./controllers/aiController');

app.use(express.json());

app.post('/wit-npm', getParamsIa);

app.listen(process.env.PORT);
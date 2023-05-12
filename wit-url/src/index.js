const express = require('express');
const app = express()

require('dotenv').config();

const { processMessageToIa } = require('./controllers/aiController');

app.use(express.json())

app.post('/wit', processMessageToIa);

app.listen(process.env.PORT || 4000)

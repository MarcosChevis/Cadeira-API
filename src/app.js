const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const chairRoute = require('./routes/chairRoute');
const chairPageRoute = require('./routes/chairPageRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/chair', chairRoute);
app.use('/chairPage', chairPageRoute)

module.exports = app;
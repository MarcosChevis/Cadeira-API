const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())

const bodyParser = require('body-parser');


const router = express.Router();


//Rotas
const index = require('./routes/index');
const chairReleaseRoute = require('./routes/chairReleaseRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/static', express.static('src/public'))
app.use('/', index);
app.use('/chairRelease', chairReleaseRoute);

module.exports = app;
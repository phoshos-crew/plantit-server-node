const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Relative path for dotenv: https://dev.to/eriesgo/dotenv-and-relative-paths-fp2
dotenv.config({path:__dirname + `./loaders/.env`})

mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`,
    {useNewUrlParser: true, useUnifiedTopology: true, ssl: true}
)

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is listening...`);
});
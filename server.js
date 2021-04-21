const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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
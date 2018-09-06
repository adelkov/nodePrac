var express = require('express');
var app = express();
var routeTest = require('./routeTest');

app.get('/', function (req, res, next) {
    res.send('home')
});
app.use('/test', routeTest);

app.listen(8080);

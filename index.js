var express = require('express');
var port = 3000;
var bodyParser = require('body-parser')
var shortid = require('shortid');
var userRoute = require('./routes/user.route');
var db = require('./db')

var app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

app.get('/', (req, res) =>
    res.render("index")
);
app.use('/users', userRoute);



app.listen(port, () => { console.log("listening on port " + port) });
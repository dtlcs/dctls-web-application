/**
 * Created by Sachini on 12/7/2017.
 */
// server.js
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var cors = require('cors');


var app = express();
// app.use(cors());
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.use(express.static(__dirname+"/public/",{index: 'home.html'}));


// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/login.html'));
// });

app.listen(process.env.PORT || 7000);
console.log('app is running on port 7000');
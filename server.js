<<<<<<< HEAD
var express = require('express');
var bodyParser = require('body-parser');
var mongojs=require('mongojs');
var db=mongojs('junction',['junction']);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+'public'));

app.get('/',function (req,res) {
    db.junction.find(function (err, docs) {
        res.json(docs);
        console.log(docs);
    });
});

app.listen(3000);
=======
var express = require('express');
var bodyParser = require('body-parser');
var mongojs=require('mongojs');
var db=mongojs('junction',['junction']);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+'public'));

app.get('/',function (req,res) {
    db.junction.find(function (err, docs) {
        res.json(docs);
        console.log(docs);
    });
});

app.listen(3000);
>>>>>>> 67a00c80c60d9da0fe2b68cf924b17b431dd892d
console.log("Server running on port 3000");
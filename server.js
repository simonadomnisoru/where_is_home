"use strict"
var bodyParser = require("body-parser");
var express = require("express");
var insertstuff = require("./dbScripts/countriesInsert.js");
var insertCriterion = require("./dbScripts/criterionsInsert.js");
var findCriterion = require("./dbScripts/criterionsFind.js");

var app = express();
var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader("Cache-Control", "no-cache");
    next();
});

app.use(require("./controllers/map"));
app.listen(port, function () {
    console.log("api running on port ${port}");
});
//insertCriterion("test");

//insertstuff();
findCriterion("Afghanistan");
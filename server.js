"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const insertstuff = require("./dbScripts/countriesInsert.js");
const insertCriterion = require("./dbScripts/criterionsInsert.js");
const findCriterion = require("./dbScripts/criterionsFind.js");

let app = express();
let port = process.env.API_PORT || 3001;

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

app.use(require("./controllers/contries"));
app.use(require("./controllers/map"));
app.use(require("./controllers/criterion"));
app.listen(port, function () {
    console.log("api running on port ${port}");
});

//insertCriterion("test");
//insertstuff();
//findCriterion("Afghanistan");
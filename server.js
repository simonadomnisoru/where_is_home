"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const country = require("./models/country.js");
const criterion = require("./models/criterion.js");

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

//country.create();
//criterion.createAll("test1");
criterion.getByCountry("Afghanistan");
"use strict";
var express = require("express");
var router = express.Router();
var CountryList = require("../dbscripts/countriesNames");
var Countries = {};

CountryList.forEach(function (item, index) {
    Countries[index] = item.value;
});

router.route("/contries")
    .get(function (req, res) {
        res.json(Countries);
    })
module.exports = router;
"use strict";
var express = require("express");
var router = express.Router();

router.route("/contries")
    .get(function (req, res) {
        res.json(require("../dbscripts/countriesNames"));
    });
module.exports = router;
"use strict";
const express = require("express");
const router = express.Router();

router.route("/contries")
    .get(function (req, res) {
        res.json(require("../dbscripts/countriesNames"));
    });
module.exports = router;
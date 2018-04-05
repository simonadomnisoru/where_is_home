"use strict";
var express = require("express");
var router = express.Router();

router.route("/criterion")
    .post(function (req, res) {
        console.log(req.body);
    });
module.exports = router;
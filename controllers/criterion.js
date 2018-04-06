"use strict";
const express = require("express");
const router = express.Router();

router.route("/criterion")
    .post(function (req, res) {
        console.log(req.body);
    });
module.exports = router;
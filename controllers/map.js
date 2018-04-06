"use strict";
const express = require("express");
const mongoose = require("mongoose");
const Country = require("../schemas/country");
const credentials = require("./dbcredentials.js");
const router = express.Router();

mongoose.connect(require("./dbcredentials"));
const data = { Country: "Popularity", Germany: 200, Canada: 500 };

router.get("/", function (req, res) {
    res.json({ message: "API Initialized!" });
});

router.route("/data")
    .get(function (req, res) {
        Country.find(function (err, mapData) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    })
    .post(function (req, res) {
        let country = new Country();
        country.name = req.body.name;
        country.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Country successfully added!" });
        });
    });
module.exports = router;
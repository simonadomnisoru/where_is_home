"use strict"
var express = require("express");
var mongoose = require('mongoose');
var Country = require('../models/country');
var credentials = require('./dbcredentials.js');
var router = express.Router();

mongoose.connect(require('./dbcredentials'));
var data = { Country: 'Popularity', Germany: 200, Canada: 500 };

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.route('/data')
    .get(function (req, res) {
        Country.find(function (err, mapData) {
            if (err)
                res.send(err);
            res.json(data);
        });
    })
    .post(function (req, res) {
        var country = new Country();
        country.name = req.body.name;
        country.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Country successfully added!' });
        });
    });
module.exports = router;
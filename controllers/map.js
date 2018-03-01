'use strict'
var express = require('express');
var mongoose = require('mongoose');
var MapData = require('../models/map');
var credentials = require('./dbcredentials.js');
var router = express.Router();

mongoose.connect(require('./dbcredentials'));
//var data = { Country: 'Popularity', Germany: 200, Canada: 500 };

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.route('/data')
    .get(function (req, res) {
        MapData.find(function (err, mapData) {
            if (err)
                res.send(err);
            res.json(mapData);
        });
    })
    .post(function (req, res) {
        var mapData = new MapData();
        //body parser lets us use the req.body
        mapData.country = req.body.country;
        mapData.value = req.body.value;
        mapData.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'mapData successfully added!' });
        });
    });
module.exports = router;
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MapData = new Schema({
    country: String,
    value: String
});

module.exports = mongoose.model('MapData', MapData);
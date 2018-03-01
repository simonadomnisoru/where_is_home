'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Criterion = new Schema({
    name: {
        type: String,
        required: true
    },
    country_id: {
        type: String,
        required: true
    },
    value: {
        type: Number,
    },
}, { collection: 'Criterions' });

module.exports = mongoose.model('Criterion', Criterion);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Country = new Schema({
    name: {
        type: String,
        required: true
    }
}, { collection: 'Countries' });

module.exports = mongoose.model('Country', Country);
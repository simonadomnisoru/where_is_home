'use strict';
var mongoose = require('mongoose');
var Country = require('../models/country');
var CountryList = require('./CountriesNames');

mongoose.connect(require('../controllers/dbcredentials'));
var Schema = mongoose.Schema;

var CreateCountriesCollection = function () {
    CountryList.forEach(function (item) {
        var country = new Country();
        country.name = item.value;
        country.save();

        var CriterionSchema = new Schema({
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
            }
        }, { collection: item.value });

        var CriterionModel = mongoose.model(item.value, CriterionSchema);
        var criteria = new CriterionModel();
        criteria.name = "Currency Euro"; // for test purpose
        criteria.value = 1; // for test purpose
        criteria.country_id = country._id;
        criteria.save();
    });
}

module.exports = CreateCountriesCollection;

"use strict";
const mongoose = require("mongoose");
const Country = require("../schemas/country");
const CountryList = require("../dbScripts/countriesNames.json");
const Criterion = require("./criterion");
const _ = require("lodash");

mongoose.connect(require("../controllers/dbcredentials"));
const Schema = mongoose.Schema;

exports.create = function () {
    _.forEach(CountryList, function (item, key) {
        let country = new Country();
        country.name = item.name;
        country.save();

        let CriterionSchema = new Schema({
            name: {
                type: String,
                required: true
            },
            countryId: {
                type: String,
                required: true
            },
            value: {
                type: Number,
            }
        }, { collection: item.name });

        let CriterionModel = mongoose.model(item.name, CriterionSchema);
        let criterion = new CriterionModel();
        criterion.name = "Currency Euro"; // for test purpose
        criterion.value = 1; // for test purpose
        criterion.countryId = country._id;
        criterion.save();
    });
};

module.exports = exports;
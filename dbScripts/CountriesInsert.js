"use strict";
const mongoose = require("mongoose");
const Country = require("../models/country");
const CountryList = require("./countriesNames");

mongoose.connect(require("../controllers/dbcredentials"));
const Schema = mongoose.Schema;

let CreateCountriesCollection = function () {
    CountryList.forEach(function (item) {
        let country = new Country();
        country.name = item.value;
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
        }, { collection: item.value });

        let CriterionModel = mongoose.model(item.value, CriterionSchema);
        let criterion = new CriterionModel();
        criterion.name = "Currency Euro"; // for test purpose
        criterion.value = 1; // for test purpose
        criterion.countryId = country._id;
        criterion.save();
    });
};

module.exports = CreateCountriesCollection;

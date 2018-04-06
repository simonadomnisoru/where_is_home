"use strict";
const Country = require("../models/country");
const Criterion = require("../models/criterion");

let InsertCriterion = function (name) {
    Country.find({}, function (err, countries) {
        countries.forEach(function (country) {
            let CriterionModel = Criterion(country.name);
            let criterion = new CriterionModel();
            criterion.name = name;
            criterion.value = 0;
            criterion.countryId = country._id;
            criterion.save();
        });
    });
};

module.exports = InsertCriterion;
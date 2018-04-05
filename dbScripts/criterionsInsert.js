"use strict";
var Country = require("../models/country");
var Criterion = require("../models/criterion");

var InsertCriterion = function (name) {
    Country.find({}, function (err, countries) {
        countries.forEach(function (country) {
            var CriterionModel = Criterion(country.name);
            var criterion = new CriterionModel();
            criterion.name = name;
            criterion.value = 0;
            criterion.countryId = country._id;
            criterion.save();
        });
    });
};

module.exports = InsertCriterion;
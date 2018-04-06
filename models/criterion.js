"use strict";
const Country = require("../schemas/country");
const Criterion = require("../schemas/criterion");

exports.createAll = function(name) {
    Country.find({}, function (err, countries) {
        countries.forEach(function (country) {
            exports.createOne(country, 0, name);
        });
    });
}

exports.createOne = function(country, value, name) {
    let CriterionModel = Criterion(country.name);
    let criterion = new CriterionModel();
    criterion.name = name;
    criterion.value = value;
    criterion.countryId = country._id;
    criterion.save();
}

exports.getByCountry = function(name) {
    let criterionModel = Criterion(name);
    criterionModel.find({}, function (err, criterions) {
        console.log(criterions);
    });
}

module.exports = exports;
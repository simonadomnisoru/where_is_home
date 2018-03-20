"use strict";
var Criterion = require("../models/criterion");

var FindCriterionsByCountryName = function (name) {
    var CriterionModel = Criterion(name);
    CriterionModel.find({}, function (err, criterions) {
        console.log(criterions);
    });
}

module.exports = FindCriterionsByCountryName;
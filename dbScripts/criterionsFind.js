"use strict";
var Criterion = require("../models/criterion");

var FindCriterionsByCountryName = function (name) {
    var criterionModel = Criterion(name);
    criterionModel.find({}, function (err, criterions) {
        console.log(criterions);
    });
};

module.exports = FindCriterionsByCountryName;
"use strict";
const Criterion = require("../models/criterion");

let FindCriterionsByCountryName = function (name) {
    let criterionModel = Criterion(name);
    criterionModel.find({}, function (err, criterions) {
        //console.log(criterions);
    });
};

module.exports = FindCriterionsByCountryName;
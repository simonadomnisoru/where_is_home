"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CreateCriterionSchema = function (countryName) {
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
    }, {
        collection: countryName
    });

    let criterionModel = mongoose.model(countryName, CriterionSchema);
    return criterionModel;
};

module.exports = CreateCriterionSchema;
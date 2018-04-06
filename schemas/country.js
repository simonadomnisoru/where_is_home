"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Country = new Schema({
    name: {
        type: String,
        required: true
    }
}, { collection: "Countries" });

module.exports = mongoose.model("Country", Country);
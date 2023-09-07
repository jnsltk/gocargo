const express = require("express");
var route = express;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose schema
var carSchema = new Schema({
    image: { type: String },
    price: { type: Number },
    description: {type: String}
});
// Mongoose model
var Car = mongoose.model('cars', carSchema);


module.exports = route;
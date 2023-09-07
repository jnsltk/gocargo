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

// Create a new car
route.post('/api/cars', function(req, res, next) {
    var car = new Car(req.body);
    car.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(car);
    });
});


module.exports = route;
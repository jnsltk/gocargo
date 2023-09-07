const express = require("express");
var route = express.Router();
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
    car.save().then(savedUser => {
        console.log('Car save successfully:', savedUser);
        res.json(car);
    }).catch(err => {
        console.error('Fail to save:', err);
    });
});

// Return a list of all cars
route.get('/api/cars', (req, res) => {
    Car.find({}).then(cars => {
        console.log('All cars: ', cars);
        res.status(200).json(cars);
      }).catch(err => {
        console.error('Error: ', err);
        res.status(500).json({ error: 'Error' });
    });
});

// Return the car with the given ID
route.get('/api/cars/:id', async function(req, res, next) {
    try {
        const car = await Car.findById(req.params.id).exec();
        if (car == null) {
            return res.status(404).json({"message": "Car not found"});
        }
        res.json(car);
    } catch (err) {
        return next(err);
    }
});

module.exports = route;
const Car = require('../models/Car');

// Create a new car
exports.createCar = async (req, res, next) => {
    try {
        const car = new Car(req.body);
        const savedCar = await car.save();
        console.log('Car saved successfully:', savedCar);
        res.json(savedCar);
    } catch (err) {
        console.error('Failed to save car:', err);
        next(err);
    }
};

// Return a list of all cars
exports.getAllCars = async (req, res, next) => {
    try {
        const cars = await Car.find({});
        console.log('All cars:', cars);
        res.status(200).json(cars);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error' });
    }
};

// Return the car with the given ID
exports.getCarById = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }
        res.json(car);
    } catch (err) {
        next(err);
    }
};
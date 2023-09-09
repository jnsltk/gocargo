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
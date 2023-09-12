const express = require("express");
const router = express.Router();
const carController = require('../controllers/carController');


// Create a new car
router.post('/api/cars', carController.createCar);

// Return a list of all cars
router.get('/api/cars', carController.getAllCars);

// Return a sort list of all cars by price. asending: sort = 1 ; desending: sort = -1
router.get('/api/cars/price/:sort', carController.getCarsByPriceAsc);

// Return the car with the given registration
router.get('/api/cars/:registration', carController.getCarByReg);

// Return a car associated with a booking
router.get('/api/bookings/:booking_id/car', carController.getCarByBookingId);

// Return a car associated with a booking and a user
router.get('/api/users/:user_email/bookings/:booking_id/car', carController.getCarByBookingAndUser);

// Update the car with the given registration
router.put('/api/cars/:registration', carController.updateCarByReg);

// Partially update the car with the given registration
router.patch('/api/cars/:registration', carController.partiallyUpdateCarByReg);

// Delete the car with the given registration
router.delete('/api/cars/:registration', carController.deleteCarByReg);

// Delete all cars
router.delete('/api/cars', carController.deleteAllCars);


module.exports = router;
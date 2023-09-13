const express = require("express");
const router = express.Router();
const carController = require('../controllers/carController');


// Create a new car
router.post('/api/cars', carController.createCar);

// Create a new car by manager email
router.post('/api/managers/:manager_email/cars', carController.createCarByManagerEmail);

// Return a list of all cars
router.get('/api/cars', carController.getAllCars);

// Return the car with the given registration
router.get('/api/cars/:registration', carController.getCarByReg);

// Return a sort list of all cars by price. asending: sort = 1 ; desending: sort = -1
router.get('/api/cars/price/:sort', carController.getCarsByPriceSort);

// Return a list of cars filtered by color
router.get('/api/cars/color/:color', carController.getCarsByColor);

// Return a car associated with a booking
router.get('/api/bookings/:booking_reference/car', carController.getCarByBookingRef);

// Return a car associated with a booking and a user
router.get('/api/users/:user_email/bookings/:booking_reference/car', carController.getCarByBookingAndUser);

// Update the car with the given registration
router.put('/api/cars/:registration', carController.updateCarByReg);

// Partially update the car with the given registration
router.patch('/api/cars/:registration', carController.partiallyUpdateCarByReg);

// Delete the car with the given registration
router.delete('/api/cars/:registration', carController.deleteCarByReg);

// Delete all cars
router.delete('/api/cars', carController.deleteAllCars);


module.exports = router;
const express = require("express");
const router = express.Router();
const carController = require('../controllers/carController');
const validateCar = require('../middleware/validateCar');


// Create a new car
router.post('/api/v1/cars', validateCar, carController.createCar);

// Create a new car by manager email
router.post('/api/v1/managers/:manager_email/cars', validateCar, carController.createCarByManagerEmail);

// Return a list of all cars
router.get('/api/v1/cars', carController.getAllCars);

// Return the car with the given registration
router.get('/api/v1/cars/:registration', carController.getCarByReg);

// Return a sort list of all cars by price. asending: sort = 1 ; desending: sort = -1
router.get('/api/v1/cars/price/:sort', carController.getCarsByPriceSort);

// Return a list of cars filtered by color
router.get('/api/v1/cars/color/:color', carController.getCarsByColor);

// Return a list of cars filtered by brand
router.get('/api/v1/cars/brand/:brand', carController.getCarsByBrand);

// Return a list of cars filtered by color and brand
router.get('/api/v1/cars/color&brand/:color/:brand', carController.getCarsByColorAndBrand);

// Return a car associated with a booking
router.get('/api/v1/bookings/:booking_reference/car', carController.getCarByBookingRef);

// Return a car associated with a booking and a user
router.get('/api/v1/users/:user_email/bookings/:booking_reference/car', carController.getCarByBookingAndUser);

// Update the car with the given registration
router.put('/api/v1/cars/:registration', validateCar, carController.updateCarByReg);

// Partially update the car with the given registration
router.patch('/api/v1/cars/:registration', carController.partiallyUpdateCarByReg);

// Delete the car with the given registration
router.delete('/api/v1/cars/:registration', carController.deleteCarByReg);

// Delete all cars
router.delete('/api/v1/cars', carController.deleteAllCars);

// Delete car by manager email in database and remove car_registration from manager
router.delete('/api/v1/managers/:manager_email/cars/:registration', carController.deleteCarByManagerEmail);


module.exports = router;
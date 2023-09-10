const express = require("express");
const router = express.Router();
const carController = require('../controllers/carController');


// Create a new car
router.post('/api/cars', carController.createCar);

// Return a list of all cars
router.get('/api/cars', carController.getAllCars);

// Return a sort list of all cars by price. asending: sort = 1 ; desending: sort = -1
router.get('/api/cars/price/:sort', carController.getCarsByPriceAsc);

// Return the car with the given ID
router.get('/api/cars/:id', carController.getCarById);

// Update the car with the given ID
router.put('/api/cars/:id', carController.updateCarById);

// Partially update the car with the given ID
router.patch('/api/cars/:id', carController.partiallyUpdateCarById);

// Delete the car with the given ID
router.delete('/api/cars/:id', carController.deleteCarById);

// Delete all cars
router.delete('/api/cars', carController.deleteAllCars);


module.exports = router;
const express = require("express");
var router = express.Router();
const carController = require('../controllers/carController');


// Create a new car
router.post('/api/cars', carController.createCar);

// Return a list of all cars
router.get('/api/cars', (req, res) => {
    Car.find({}).then(cars => {
        console.log('All cars: ', cars);
        res.status(200).json(cars);
      }).catch(err => {
        console.error('Error: ', err);
        res.status(500).json({ error: 'Error' });
    });
});

// Return the car with the given ID
router.get('/api/cars/:id', async function(req, res, next) {
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


// Update the car with the given ID
router.put('/api/cars/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const car = await Car.findById(id).exec();
        if (car == null) {
            return res.status(404).json({"message": "Car not found"});
        }
        
        car.image = req.body.image;
        car.price = req.body.price;
        car.description = req.body.description;
        await car.save();
        res.json(car);
    } catch (err) {
        return next(err);
    }
});

// Partially update the car with the given ID
router.patch('/api/cars/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const car = await Car.findById(id).exec();
        if (car == null) {
            return res.status(404).json({"message": "Car not found"});
        }
        car.image = req.body.image || car.image;
        car.price = req.body.price || car.price;
        car.description = req.body.description || car.description;
        await car.save();
        res.json(car);
    } catch (err) {
        return next(err);
    }
});

// Delete the car with the given ID
router.delete('/api/cars/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const car = await Car.findOneAndDelete({ _id: id }).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }
        res.json(car);
    } catch (err) {
        return next(err);
    }
});

// Delete all cars
router.delete('/api/cars', async (req, res, next) => {
    try {
      const result = await Car.deleteMany({});
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'No cars found to delete' });
      }
      res.json({ message: `Successfully deleted ${result.deletedCount} cars` });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
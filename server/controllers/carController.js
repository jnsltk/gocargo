const Car = require('../models/Car');
const BookingModel = require('../models/Booking');
const UserModel = require('../models/User');

// Create a new car
exports.createCar = async (req, res, next) => {
    try {
        const car = new Car(req.body);
        const savedCar = await car.save();
        console.log('Car saved successfully:', savedCar);
        res.status(201).json(savedCar);
    } catch (err) {
        console.error('Failed to save car:', err);
        res.status(400).json({error: 'Failed to save car'});
        next(err);
    }
};

// Create a new car by manager_email
exports.createCarByManagerEmail = async (req, res, next) => {
    const managerEmail = req.params.manager_email;
    try {
        // Find the corresponding manager by the manager's email
        const manager = await ManagerModel.findOne({ email: managerEmail });
        if (!manager) {
            res.status(404).json({ message: 'Manager not found!' });
            return;
        }

        // Create a new car and associate it with the manager
        const car = new Car(req.body);
        car.manager = manager; // associate car with manager
        const savedCar = await car.save();

    } catch (err) {
        console.error('Failed to save car:', err);
        res.status(400).json({ error: 'Failed to save car' });
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

// Return a sort list of all cars by price
exports.getCarsByPriceSort = async (req, res, next) => {
    try {
        const sort = parseInt(req.params.sort, 10); // Parse req to int type
        const cars = await Car.find({}).sort({ price: sort }); // asending: sort = 1 ; desending: sort = -1
        console.log('Cars sorted by price (ascending):', cars);
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

// Return a car associated with a booking
exports.getCarByBookingId = async (req, res, next) => {
    const bookingId = req.params.booking_id;

    try {
        const booking = await BookingModel.findById(bookingId).populate('car');
        if (!booking) {
            return res.status(404).json({ 'message': 'Booking not found' });
        }
        res.json(booking.car);
    } catch (error) {
        next(error);
    }
}

// Return a car associated with a booking and a user
exports.getCarByBookingAndUser = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const bookingId = req.params.booking_id;

    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ 'message': 'User not found' })
        }
        
        const booking = user.bookings.find((booking) => booking._id.toString() === bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'User has no booking with this ID' });
        }

        const car = await Car.findById(booking.car).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }

        res.json(car);
    } catch (error) {
        next(error);
    }

}

// Update the car with the given ID
exports.updateCarById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }

        car.image = req.body.image;
        car.price = req.body.price;
        car.description = req.body.description;
        await car.save();
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Partially update the car with the given ID
exports.partiallyUpdateCarById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }

        car.image = req.body.image || car.image;
        car.price = req.body.price || car.price;
        car.description = req.body.description || car.description;
        await car.save();
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Delete the car with the given ID
exports.deleteCarById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const car = await Car.findOneAndDelete({ _id: id }).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Delete all cars
exports.deleteAllCars = async (req, res, next) => {
    try {
        const result = await Car.deleteMany({});
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No cars found to delete' });
        }
        res.json({ message: `Successfully deleted ${result.deletedCount} cars` });
    } catch (err) {
        next(err);
    }
};
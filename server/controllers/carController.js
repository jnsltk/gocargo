const Car = require('../models/Car');
const BookingModel = require('../models/Booking');
const UserModel = require('../models/User');

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

// Return a sort list of all cars by price
exports.getCarsByPriceAsc = async (req, res, next) => {
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

// Return the car with the given registration number
exports.getCarByReg = async (req, res, next) => {
    const carRegistration = req.params.registration;

    try {
        const car = await Car.findOne({ registration: carRegistration }).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Return a car associated with a booking
exports.getCarByBookingRef = async (req, res, next) => {
    const bookingReference = req.params.booking_reference;

    try {
        const booking = await BookingModel.findOne({ bookingReference: bookingReference }).populate('car');
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
    const bookingReference = req.params.booking_reference;

    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ 'message': 'User not found' })
        }
        
        const booking = user.bookings.find((booking) => booking.bookingReference === bookingReference);
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

// Update the car with the given registration number
exports.updateCarByReg = async (req, res, next) => {
    try {
        const registration = req.params.registration;
        const car = await Car.findOne({ registration: registration }).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }

        car.registration = req.body.registration;
        car.image = req.body.image;
        car.price = req.body.price;
        car.description = req.body.description;
        await car.save();
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Partially update the car with the given registration number
exports.partiallyUpdateCarByReg = async (req, res, next) => {
    try {
        const registration = req.params.registration;
        const car = await Car.findOne({ registration: registration }).exec();
        if (car == null) {
            return res.status(404).json({ "message": "Car not found" });
        }

        car.registration = req.body.registration || car.registration;
        car.image = req.body.image || car.image;
        car.price = req.body.price || car.price;
        car.description = req.body.description || car.description;
        await car.save();
        res.json(car);
    } catch (err) {
        next(err);
    }
};

// Delete the car with the given registration number
exports.deleteCarByReg = async (req, res, next) => {
    try {
        const registration = req.params.registration;
        const car = await Car.findOneAndDelete({ registration: registration }).exec();
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
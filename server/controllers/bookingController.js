const BookingModel = require('../models/Booking');
const UserModel = require('../models/User');
const CarModel = require('../models/Car');

//const shortid = require('shortid');

// GET all bookings
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await BookingModel.find().populate('car');
        res.json(bookings);
    } catch (error) {
        next(error);
    }
}

// GET specific booking by bookingReference
exports.getBookingByRef = async (req, res, next) => {
    const bookingReference = req.params.booking_reference;

    try {
        const booking = await BookingModel.findOne({ bookingReference: bookingReference }).populate('car');
        if (!booking) {
            return res.status(404).json( {message: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        next(error);
    }
}

// GET all bookings by user
exports.getAllBookingsByUser = async (req, res, next) => {
    const userEmail = req.params.user_email;
    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.bookings);
    } catch (error) {
        next(error);
    }
}

// GET specific booking by user email and bookingReference
exports.getBookingByUserAndRef = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const bookingReference = req.params.booking_reference;
    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const booking = user.bookings.find((booking) => booking.bookingReference === bookingReference);
        if (!booking) {
            return res.status(404).json({ message: 'User has no booking with this reference number' });
        }
        
        res.json({ booking });
    } catch (error) {
        next(error);
    }
}

// POST to create a new booking for a specific user
exports.createBookingForUser = async (req, res, next) => {
    let { bookingReference, userEmail, startDate, endDate, status, content, carRegistration } = req.body;
    
    try {
        // If no bookingReference is provided create one
        if (!bookingReference) {
            bookingReference = shortid.generate();
        }
        
        // Change user email to _id
        const existingUser = await UserModel.findOne({ email: userEmail }).exec();
        if (!existingUser) {
            return res.status(404).json({ message: 'User doesn\'t exist' });
        }
        const user = existingUser._id;
        
        // Change car registration to _id
        const existingCar = await CarModel.findOne({ registration: carRegistration }).exec();
        if (!existingCar) {
            return res.status(404).json({ message: 'Car doesn\'t exist' });
        }
        const car = existingCar._id;
        
        
        const newBooking = new BookingModel({
            bookingReference,
            user,
            startDate,
            endDate,
            status,
            content,
            car
        });
        
        await newBooking.save();
        
        existingUser.bookings.push(newBooking._id);
        await existingUser.save();
        
        res.status(201).json({ message: 'Booking successful', newBooking })
    } catch (error) {
        next(error);
    }
}

// Remove all bookings
exports.removeAllBookings = async (req, res, next) => {
    try {
        await BookingModel.deleteMany({});
        res.status(200).json({ message: 'Successfully removed all bookings'});
    } catch (error) {
        next(error);
    }
}

// Remove booking by user and bookingReference
exports.removeBookingByUserAndRef = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const bookingReference = req.params.booking_reference;
    
    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const booking = user.bookings.find((booking) => booking.bookingReference === bookingReference);
        if (!booking) {
            return res.status(404).json({ message: 'User has no booking with this ID' });
        }
        
        await booking.deleteOne();
        
        return res.status(200).json({ message: 'Booking removed successfully'});
    } catch (error) {
        next(error);
    }
}
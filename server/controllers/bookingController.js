const BookingModel = require('../models/Booking');

// GET all bookings
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await BookingModel.find();
        res.json(bookings);
    } catch (error) {
        next(error);
    }
}

// Create new booking (POST request)
exports.createBooking = async (req, res, next) => {
    const { startDate, endDate, status, content} = req.body;

    try {
        const newBooking = new BookingModel({
            startDate,
            endDate,
            status,
            content
        });
        
        await newBooking.save();

        res.status(201).json({ message: 'Booking successful'})
    } catch (error) {
        next(error);
    }
}
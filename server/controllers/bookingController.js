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

// GET specific booking by id
exports.getBookingById = async (req, res, next) => {
    const id = req.params.booking_id;
    try {
        const booking = await BookingModel.findById(id);
        if (!booking) {
            return res.status(404).json( {message: 'Booking not found' });
        }
        res.json(booking);
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

// Remove booking by id
exports.removeBookingById = async (req, res, next) => {
    const id = req.params.booking_id;

    try {
        const booking = await BookingModel.findById(id);
        // Check if booking exists
        if (!booking) {
            return res.status(404).json( {message: 'Booking not found' });
        }

        // Delete booking
        await booking.deleteOne();

        return res.json({ message: 'Booking removed successfully'})
    } catch (error) {
        next(error);
    }
}
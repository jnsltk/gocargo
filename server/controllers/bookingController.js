const BookingModel = require('../models/Booking');
const UserModel = require('../models/User');

// GET all bookings
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await BookingModel.find().populate('car');
        res.json(bookings);
    } catch (error) {
        next(error);
    }
}

// GET specific booking by id
exports.getBookingById = async (req, res, next) => {
    const id = req.params.booking_id;
    try {
        const booking = await BookingModel.findById(id).populate('car');
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

// GET specific booking by user email and booking ID
exports.getBookingByUserAndId = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const bookingId = req.params.booking_id;
    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const booking = user.bookings.find((booking) => booking._id.toString() === bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'User has no booking with this ID' });
        }
        
        res.json({ booking });
    } catch (error) {
        next(error);
    }
}

// Create new booking (POST request)
exports.createBooking = async (req, res, next) => {
    const { user, startDate, endDate, status, content, car} = req.body;
    
    try {
        const newBooking = new BookingModel({
            user,
            startDate,
            endDate,
            status,
            content,
            car
        });
        
        await newBooking.save();
        
        res.status(201).json({ message: 'Booking successful'})
    } catch (error) {
        next(error);
    }
}

// POST to create a new booking for a specific user
exports.createBookingForUser = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const { startDate, endDate, status, content, car} = req.body;
    
    try {
        const existingUser = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const user = existingUser._id.toString();
        const newBooking = new BookingModel({
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
        
        res.status(201).json({ message: 'Booking successful', booking: newBooking });
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
        
        return res.status(200).json({ message: 'Booking removed successfully'});
    } catch (error) {
        next(error);
    }
}

// Remove booking by user and id
exports.removeBookingByUserAndId = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const bookingId = req.params.booking_id;

    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const booking = user.bookings.find((booking) => booking._id.toString() === bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'User has no booking with this ID' });
        }

        await booking.deleteOne();

        return res.status(200).json({ message: 'Booking removed successfully'});
    } catch (error) {
        next(error);
    }
}
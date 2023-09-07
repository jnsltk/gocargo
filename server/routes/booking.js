const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

// GET all bookings
router.get('/api/bookings', BookingController.getAllBookings);

// GET a specific booking by id
router.get('/api/bookings/:booking_id', BookingController.getBookingById);

// POST to create new booking
router.post('/api/bookings', BookingController.createBooking);

// DELETE to remove booking by id
// router.delete('/api/bookings/:booking_id', BookingController.removeBookingById)

module.exports = router;

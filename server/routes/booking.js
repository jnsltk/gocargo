const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

// GET all bookings
router.get('/api/bookings', BookingController.getAllBookings);

// GET a specific booking by id
router.get('/api/bookings/:booking_id', BookingController.getBookingById);

// GET all bookings of a user by user email
router.get('/api/users/:user_email/bookings', BookingController.getAllBookingsByUser);

// GET specific booking by user email and booking ID
router.get('/api/users/:user_email/bookings/:booking_id', BookingController.getBookingByUserAndId);

// POST to create new booking
router.post('/api/bookings', BookingController.createBooking);

// DELETE all bookings
router.delete('/api/bookings', BookingController.removeAllBookings);

// DELETE to remove booking by id
router.delete('/api/bookings/:booking_id', BookingController.removeBookingById)

module.exports = router;

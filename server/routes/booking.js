const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');
const validateBooking = require('../middleware/validateBooking');
const auth = require('../middleware/auth');

// GET all bookings
router.get('/api/v1/bookings', BookingController.getAllBookings);

// GET a specific booking by bookingReference
router.get('/api/v1/bookings/:booking_reference', BookingController.getBookingByRef);

// GET all bookings of a user by user email
router.get('/api/v1/users/:user_email/bookings', auth, BookingController.getAllBookingsByUser);

// GET specific booking by user email and bookingReference
router.get('/api/v1/users/:user_email/bookings/:booking_reference', BookingController.getBookingByUserAndRef);

// POST to create a new booking for a specific user
router.post('/api/v1/users/:user_email/bookings', validateBooking, BookingController.createBookingForUser);

// DELETE all bookings
router.delete('/api/v1/bookings', BookingController.removeAllBookings);

// DELETE to remove booking by user and bookingReference
router.delete('/api/v1/users/:user_email/bookings/:booking_reference', BookingController.removeBookingByUserAndRef);

module.exports = router;

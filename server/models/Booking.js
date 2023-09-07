const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
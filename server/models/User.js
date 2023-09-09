const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}]
});

module.exports = mongoose.model('User', userSchema);

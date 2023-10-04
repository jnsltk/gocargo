const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    phonenumber: {type: Number},
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}]
});

userSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
    try {
        await mongoose.model('Booking').deleteMany({ user: this._id });
        return next();
    } catch (error) {
        next(error);
    }
});

userSchema.pre('deleteMany', { document: true, query: true }, async function (next) {
    try {
        const userBookings = await mongoose.model('Booking').find(this._conditions);
        for (const booking of userBookings) {
            await mongoose.model('Booking').deleteOne({ user: booking.user.toString() });
        }

        return next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);

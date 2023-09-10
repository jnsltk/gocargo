const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },
    content: { type: String, required: true },
    car:  { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true }
});

// Pre-delete middleware to make sure references are deleted with bookings
bookingSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
    try {
        // Find user associated with booking
        const user = await mongoose.model('User').findById(this.user);

        if (user) {
            user.bookings.pull(this._id);
            await user.save();
        }

        return next();
    } catch (error) {
        next(error);
    }
})

bookingSchema.pre('deleteMany', { document: true, query: true }, async function (next) {
    try {
        const deletedBookings = await mongoose.model('Booking').find(this._conditions);
        for (const booking of deletedBookings) {
            const user = await mongoose.model('User').findById(booking.user);
            if (user) {
                user.bookings.pull(booking._id);
                await user.save();
            }
        }
        return next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
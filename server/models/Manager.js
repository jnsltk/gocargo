const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangersSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    bookingId: {type: String},
    address: { type: String, required: true}
 });

// Export mongoose model
module.exports = mongoose.model('Manager',mangersSchema);



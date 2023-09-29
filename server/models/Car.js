const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose schema
const carSchema = new Schema({
    registration: { type: String, required: true, unique: true },
    image: { type: String},
    price: { type: Number, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true }
});

// Export mongoose model
module.exports = mongoose.model('Car', carSchema);
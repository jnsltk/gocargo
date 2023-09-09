const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose schema
const carSchema = new Schema({
    image: { type: String },
    price: { type: Number },
    description: {type: String}
});

// Export mongoose model
module.exports = mongoose.model('Car', carSchema);
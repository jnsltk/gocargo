const mongoose = require('mongoose');

// Mongoose schema
const carSchema = new Schema({
    image: { type: String },
    price: { type: Number },
    description: {type: String}
});

module.exports = mongoose.model('Car', carSchema);
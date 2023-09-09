const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create Manager Mongoose schema

 var MangersSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    bookingId: {type: String, require: true},
    managerId:{ type: String, required:true, unique: true},
    address: { type: String, required: true,}
 })
// create mongoose model
const Managers = mongoose.model('manager',MangersSchema);




module.exports = router;
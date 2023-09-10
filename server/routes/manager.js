const express = require("express");
const bcrypt = require('bcrypt');
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
    bookingId: {type: String, required: true},
    address: { type: String, required: true}
 })
// create mongoose model
const Managers = mongoose.model('manager',MangersSchema);

// create to register a new manager
router.post('/api/managers', async(req, res,) =>{
   const{email, fname, lname, password, balance,address} = req.body;
   try{
      const existingManager = await Managers.findOne({ email });
        if (existingManager) {
            return res.status(409).json({ message: 'Manager already exists' });
        }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new manager with the hashed password
      const newManager = new Managers({
         email,
         fname,
         lname,
         password: hashedPassword,
         balance,
         address,
     });
     const saveManager = await newManager.save();
     res.status(201).json('Manager registered successfully');
   }catch(err) {
      res.status(400).json({message:err.message});
   }
});


module.exports = router;
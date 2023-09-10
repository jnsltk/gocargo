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

// get all managers
router.get('/api/managers', async (req, res) => {
   try {
     const managers = await Managers.find(); 
 
     res.json(managers); 
   } catch (err) {
     res.status(500).json({ message: err.message });
   }
 });

 //GET a specific manager by email

 router.get('/api/managers/:manager_email', async (req, res, next) => {
   const managerEmail = req.params.manager_email;
try {
   const manager = await Managers.findOne({email: managerEmail});

    if (!manager) {
        return res.status(404).json({"message": "Email not found"});
   }

    res.json(manager);
} catch (err) {
   next(err); 
}
}); 

//GET a specific manager by email

router.get('/api/managers/:manager_email', async (req, res, next) => {
   const managerEmail = req.params.manager_email;
try {
   const manager = await Managers.findOne({email: managerEmail});

    if (!manager) {
        return res.status(404).json({"message": "Email not found"});
    }

    res.json(manager);
} catch (err) {
   next(err); 
}
}); 

// PUT to modify manager (replacing all fields)
router.put('/api/managers/:manager_Email', async (req, res, next) => {
   const managerEmail = req.params.manager_Email;
try {
   const manager = await Managers.findOne({email: managerEmail});

   if (!manager) {
      return res.status(404).json({"message": "Email not found"});
   }
   manager.email =req.body.email ;
   manager.fname =req.body.fname ;
   manager.lname =req.body.lname ;
   manager.password =req.body.password ;
   manager.address =req.body.address ;
   await manager.save();
   res.json({message: 'Manager updated successfully',manager});
} catch (err) {
   return next(err); 
}
}); 

// Remove all managers
router.delete('/api/managers', async (req, res, next) => {
   try {
       await Managers.deleteMany({});
       res.status(200).json({ message: 'Successfully removed all managers'});
   } catch (error) {
       next(error);
   }
})


// DELETE to remove manager by email
router.delete('/api/managers/:manager_email', async (req, res, next) => {
   const ManagerEmail = req.params.manager_email;

   try {
       const manager = await Managers.findOne({ email: ManagerEmail });
       if (!manager) {
           return res.status(404).json({ message: 'manager email not found' });
       }

       await manager.deleteOne();

       return res.json({ message: 'Manager removed successfully' });
   } catch (error) {
       next(error);
   }
})

module.exports = router;

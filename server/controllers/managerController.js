const ManagerModel = require('../models/Manager');
const bcrypt = require('bcrypt');

// POST to register a new manager

exports.registerManager = async(req, res,) =>{
    const{email, fname, lname, password, balance,address} = req.body;

    try{
       const existingManager = await ManagerModel.findOne({ email });
         if (existingManager) {
             return res.status(409).json({ message: 'Manager already exists' });
         }
 
       // Hash the password
       const hashedPassword = await bcrypt.hash(password, 10);
 
       // Create a new manager with the hashed password
       const newManager = new ManagerModel({
          email,
          fname,
          lname,
          password: hashedPassword,
          balance,
          address,
      });

       await newManager.save();

      res.status(201).json('Manager registered successfully');
    }catch(err) {
       res.status(400).json({message:err.message});
    }
 };

 // GET all managers 
 exports.getAllManagers = async (req, res ,next) =>{
    try {
        const managers = await ManagerModel.find({});
        res.status(200).json(managers);
    } catch(err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error' });
    }
 }

 // GET a specific manager by email
 exports.getManagerByEmail = async (req, res,next) => {
    const managerEmail = req.params.manager_email;
    try {
    const manager = await ManagerModel.findOne({email:managerEmail});
    if(!manager){
        res.status(404).json({message:'manager not found !'});
    }
    res.json(manager);
    } catch(err){
      next(err);
    }
};

// PUT to modify manager (replacing all fields)
exports.updateManagerByEmail = async (req, res, next) => {
    const managerEmail = req.params.manager_email;
    try {
        const manager = await ManagerModel.findOne({email:managerEmail});
        if (!manager){
            res.status(404).json({message:'manager not found !'});
        }
        manager.email =req.body.email ;
        manager.fname =req.body.fname ;
        manager.lname =req.body.lname ;
        manager.password =req.body.password ;
        manager.address =req.body.address ;
        await manager.save();   
        res.status(200).json({massage :'Manager updated successfully',manager});
    }catch(err){
        next(err);
    }

}

// PATCH to modify an existing manager by email
exports.patchManagerByEmail = async (req, res, next) => {
    const managerEmail= req.params.manager_email;
 
 try {
    const manager = await ManagerModel.findOne({email :managerEmail});
 
    if (!manager) {
       res.status(404).json({"message": "Manager not found"});
    }
 
    manager.email =(req.body.email || manager.email);
    manager.fname =(req.body.fname || manager.fname);
    manager.lname =(req.body.lname || manager.lname);
    manager.password =(req.body.password || manager.password);
    manager.address =(req.body.address || manager.address);
    await manager.save();
    res.status(200).json({message: 'Manager updated successfully',manager});
 } catch (err) {
    next(err); 
   }
}; 

// Remove all managers
exports.deleteAllManager = async (req, res, next) => {
    try {
        await ManagerModel.deleteMany({});
        return res.status(200).json({ message: 'Successfully removed all managers'});
    } catch (err) {
        next(err);
    }
 };

 //DELETE to remove manager by email
exports.deleteManagerByEmail = async (req, res, next) => {
   const ManagerEmail = req.params.manager_email;

   try {
       const manager = await ManagerModel.findOne({ email: ManagerEmail });
       if (!manager) {
           return res.status(404).json({ message: 'manager email not found' });
       }
       await manager.deleteOne();
       return res.json({ message: 'Manager removed successfully' });
   } catch (err) {
       next(err);
   }
};

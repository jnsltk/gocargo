const UserModel = require('../models/User');

// GET all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find().populate('bookings');
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// GET a specific user by email
exports.getUserByEmail = async (req, res, next) => {
    const userEmail = req.params.user_email;
    try {
        const user = await UserModel.findOne({ email: userEmail }).populate('bookings');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// POST to register a new user
exports.registerUser = async (req, res, next) => {
    const { email, fname, lname, password, balance } = req.body;
    
    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        
        // Create a new user
        const newUser = new UserModel({
            email,
            fname,
            lname,
            password,
            balance,
        });
        
        // Save the new user to the database
        await newUser.save();
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

// PATCH to modify an existing user by email
exports.patchUserByEmail = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const updatedUserData = req.body;
    
    try {
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Update user data with the new data
        Object.assign(user, updatedUserData);
    
        // Save the updated user
        await user.save();
    
        res.json({ message: 'User updated successfully', user });
      } catch (error) {
        next(error);
      }
}

// PUT to modify user (replacing all fields)
exports.modifyUserByEmail = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const { email, fname, lname, password, balance } = req.body;

    try {
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!Object.values({ email, fname, lname, password, balance }).every((value) => Boolean(value))) {
            res.status(400).json({ message: 'One or more fields are missing' });
        }

        Object.assign(user, { email, fname, lname, password, balance });
        
        await user.save();

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        next(error);
    }
}

// Remove all users
exports.deleteAllUsers = async (req, res, next) => {
    try {
        await UserModel.deleteMany({});
        res.status(200).json({ message: 'Successfully removed all users'});
    } catch (error) {
        next(error);
    }
}

// DELETE to remove user by email
exports.deleteUserByEmail = async (req, res, next) => {
    const userEmail = req.params.user_email;

    try {
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete user
        await user.deleteOne();

        return res.json({ message: 'User removed successfully' });
    } catch (error) {
        next(error);
    }
}
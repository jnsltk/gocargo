const UserModel = require('../models/User');
const bcrypt = require('bcrypt'); // Introduced the bcrypt library for encrypting the password
const jwt = require('jsonwebtoken'); // Introduced the jsonwebtoken library for JWT token

// GET all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find().populate('bookings');
        res.status(200).json(users);
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

        // Create HATEOAS links for user
        const userLinks = {
            ...user._doc,
            links: {
                self: {
                    href: `http://localhost:3000/api/v1/users/${userEmail}`
                },
                bookings: {
                    href:`http://localhost:5173/useraccount`
                }
            }
        };

        res.json(userLinks);
    } catch (error) {
        next(error);
    }
};

// POST to register a new user
exports.registerUser = async (req, res, next) => {
    const { email, fname, lname, phonenumber, password, balance } = req.body;
    
    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user with the hashed password
        const newUser = new UserModel({
            email,
            fname,
            lname,
            phonenumber,
            password: hashedPassword,
            balance,
        });
        
        // Save the new user to the database
        await newUser.save();
        
        res.status(201).json({ message: 'User registered successfully', newUser });
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

        // Hash the password if updating it
        let newPassword = updatedUserData.password;
        if(newPassword != null){
            // Hash the new password
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            updatedUserData.password = hashedNewPassword;
        }
        
        // Update user data with the new data
        Object.assign(user, updatedUserData);
        
        // Save the updated user
        await user.save();
        
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        next(error);
    }
}

// PUT to modify user (replacing all fields)
exports.modifyUserByEmail = async (req, res, next) => {
    const userEmail = req.params.user_email;
    const { email, fname, lname, phonenumber, password, balance, bookings } = req.body;
    
    try {
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if new email is already registered
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: 'User email already in use' });
        }

        // Check if fields are empty, not including bookings and balance because those can be null
        if (!Object.values({ email, fname, lname, phonenumber, password }).every((value) => Boolean(value))) {
            res.status(400).json({ message: 'One or more fields are missing' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        Object.assign(user, { email, fname, lname, phonenumber, hashedPassword, balance, bookings });
        
        await user.save();
        
        res.status(200).json({ message: 'User updated successfully', user });
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

        return res.json({ message: 'User removed successfully', user });
    } catch (error) {
        next(error);
    }
}

// Authenticate the user login
exports.authenticateUser = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // else Password is valid, user is authenticated
        // Generate a JWT token
        const token = jwt.sign({ userEmail: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' });

        // Response the token
        res.status(200).json({ message: 'Authentication successful', token });
    } catch (error) {
        next(error);
    }
};

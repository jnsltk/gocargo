const ManagerModel = require('../models/Manager');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Introduced the jsonwebtoken library for JWT token

// POST to register a new manager

exports.registerManager = async (req, res,) => {
    const { email, fname, lname, password, balance, address } = req.body;

    try {
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

        res.status(201).json({ message: 'Manager registered successfully', newManager });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET all managers 
exports.getAllManagers = async (req, res, next) => {
    try {
        const managers = await ManagerModel.find({});
        res.status(200).json(managers);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error' });
    }
}

// GET a specific manager by email
exports.getManagerByEmail = async (req, res, next) => {
    const managerEmail = req.params.manager_email;
    try {
        const manager = await ManagerModel.findOne({ email: managerEmail });
        if (!manager) {
            return res.status(404).json({ message: 'manager not found !' });
        }

        // Create HATEOAS links for manager
        const managerLinks = {
            ...manager._doc,
            links: {
                self: {
                    href: `/api/managers/${managerEmail}`
                }
            }
        };

        res.json(managerLinks);
    } catch (err) {
        next(err);
    }
};

// PUT to modify manager (replacing all fields)
exports.updateManagerByEmail = async (req, res, next) => {
    const managerEmail = req.params.manager_email;
    const updatedManagerData = req.body;
    try {
        var manager = await ManagerModel.findOne({ email: managerEmail });
        if (!manager) {
            return res.status(404).json({ message: 'Manager not found!' });
        }

        // Check if new email is already registered
        const existingManager = await ManagerModel.findOne({ email: updatedManagerData.email });
        if (existingManager) {
            return res.status(409).json({ message: 'Manager email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        manager.email = req.body.email;
        manager.fname = req.body.fname;
        manager.lname = req.body.lname;
        manager.password = hashedPassword;
        manager.balance = req.body.balance;
        manager.address = req.body.address;
        await manager.save();
        res.status(200).json({ message: 'Manager updated successfully', manager });
    } catch (err) {
        next(err);
    }

}

// PATCH to modify an existing manager by email
exports.patchManagerByEmail = async (req, res, next) => {
    const managerEmail = req.params.manager_email;
    const updatedManagerData = req.body;

    try {
        const manager = await ManagerModel.findOne({ email: managerEmail });

        if (!manager) {
            return res.status(404).json({ "message": "Manager not found" });
        }

        // Check if new email is already registered
        const existingManager = await ManagerModel.findOne({ email: updatedManagerData.email });
        if (existingManager) {
            return res.status(409).json({ message: 'Manager email already in use' });
        }

        manager.email = (req.body.email || manager.email);
        manager.fname = (req.body.fname || manager.fname);
        manager.lname = (req.body.lname || manager.lname);
        if(req.body.password){
            manager.password = await bcrypt.hash(req.body.password, 10);
        }
        manager.address = (req.body.address || manager.address);
        await manager.save();
        res.status(200).json({ message: 'Manager updated successfully', manager });
    } catch (err) {
        next(err);
    }
};

// Remove all managers
exports.deleteAllManager = async (req, res, next) => {
    try {
        await ManagerModel.deleteMany({});
        return res.status(200).json({ message: 'Successfully removed all managers' });
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

// Authenticate the manager login
exports.authenticateManager = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the manager by email
        const manager = await ManagerModel.findOne({ email });
        if (!manager) {
            return res.status(404).json({ message: 'Manager not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, manager.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // else Password is valid, manager is authenticated
        // Generate a JWT token
        const token = jwt.sign({ managerId: manager._id }, 'your-secret-key', { expiresIn: '2h' });

        // Response the token
        res.status(200).json({ message: 'Authentication successful', token });
    } catch (error) {
        next(error);
    }
}

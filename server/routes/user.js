// routes/user.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET all users
router.get('/api/users', UserController.getAllUsers);

// GET a specific user by email
router.get('/api/users/:user_email', UserController.getUserByEmail);

// POST to register a new user
router.post('/api/users', UserController.registerUser);

module.exports = router;

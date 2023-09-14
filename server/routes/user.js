const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

// GET all users
router.get('/api/v1/users', UserController.getAllUsers);

// GET a specific user by email
router.get('/api/v1/users/:user_email', UserController.getUserByEmail);

// POST to register a new user
router.post('/api/v1/users', validateUser, UserController.registerUser);

// PUT to modify all fields within a user
router.put('/api/v1/users/:user_email', validateUser, UserController.modifyUserByEmail);

// PATCH to partially modify an existing user by email
router.patch('/api/v1/users/:user_email', UserController.patchUserByEmail);

// DELETE all users
router.delete('/api/v1/users', UserController.deleteAllUsers);

// DELETE to remove user by email
router.delete('/api/v1/users/:user_email', UserController.deleteUserByEmail);

// Authenticate the user login
router.post('/api/v1/users/authentication', UserController.authenticateUser);

module.exports = router;

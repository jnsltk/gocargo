const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET all users
router.get('/api/users', UserController.getAllUsers);

// GET a specific user by email
router.get('/api/users/:user_email', UserController.getUserByEmail);

// POST to register a new user
router.post('/api/users', UserController.registerUser);

// PUT to modify all fields within a user
router.put('/api/users/:user_email', UserController.modifyUserByEmail)

// PATCH to partially modify an existing user by email
router.patch('/api/users/:user_email', UserController.patchUserByEmail)

// DELETE to remove user by email
router.delete('/api/users/:user_email', UserController.deleteUserByEmail)

module.exports = router;

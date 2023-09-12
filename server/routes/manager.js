const express = require('express');
const router = express.Router();
const ManagerController = require('../controllers/managerController');


// GET all managers
router.get('/api/managers', ManagerController.getAllManagers);

// GET a specific manager by email
router.get('/api/managers/:manager_email', ManagerController.getManagerByEmail);

// POST to register a new manager
router.post('/api/managers', ManagerController.registerManager);

// PUT to modify all fields within a manager
router.put('/api/managers/:manager_email', ManagerController.updateManagerByEmail)

// PATCH to partially modify an existing user by email
router.patch('/api/managers/:manager_email', ManagerController.patchManagerByEmail)

// DELETE all manager
router.delete('/api/managers', ManagerController.deleteAllManager);

// DELETE to remove manager by email
router.delete('/api/managers/:manager_email', ManagerController.deleteManagerByEmail)

// Authenticate the manager login
router.post('/api/managers/authentication', ManagerController.authenticateManager);

module.exports = router;

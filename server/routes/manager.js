const express = require('express');
const router = express.Router();
const ManagerController = require('../controllers/managerController');
const validateManager = require('../middleware/validateManager');


// GET all managers
router.get('/api/v1/managers', ManagerController.getAllManagers);

// GET a specific manager by email
router.get('/api/v1/managers/:manager_email', ManagerController.getManagerByEmail);

// POST to register a new manager
router.post('/api/v1/managers', validateManager, ManagerController.registerManager);

// PUT to modify all fields within a manager
router.put('/api/v1/managers/:manager_email', validateManager, ManagerController.updateManagerByEmail)

// PATCH to partially modify an existing user by email
router.patch('/api/v1/managers/:manager_email', ManagerController.patchManagerByEmail)

// DELETE all manager
router.delete('/api/v1/managers', ManagerController.deleteAllManager);

// DELETE to remove manager by email
router.delete('/api/v1/managers/:manager_email', ManagerController.deleteManagerByEmail)

// Authenticate the manager login
router.post('/api/v1/managers/authentication', ManagerController.authenticateManager);

module.exports = router;

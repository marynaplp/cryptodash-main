// File: server/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController'); // Ensure this path is correct
const router = express.Router();

// Route for user signup
router.post('/signup', userController.signup);

// Route for user login
router.post('/login', userController.login);

// Route for getting user information
router.get('/:username', userController.getUser);

module.exports = router;


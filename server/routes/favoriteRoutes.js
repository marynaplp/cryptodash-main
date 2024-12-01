// File: server/routes/favoriteRoutes.js
const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const router = express.Router();

// Route for getting a user's favorite cryptocurrencies
router.get('/:username', favoriteController.getFavorites);

// Route for adding or removing a favorite cryptocurrency
router.post('/:username', favoriteController.updateFavorite);

module.exports = router;


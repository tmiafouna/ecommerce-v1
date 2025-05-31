const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, isAdmin } = require('../middleware/auth');

// Routes d'administration
router.get('/users', protect, isAdmin, adminController.getAllUsers);
router.get('/products', protect, isAdmin, adminController.getAllProducts);
router.get('/orders', protect, isAdmin, adminController.getAllOrders);

module.exports = router;

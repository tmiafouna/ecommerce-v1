const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

// Routes pour les commandes
router.post('/', protect, orderController.createOrder);
router.get('/', protect, orderController.getUserOrders);
router.get('/:id', protect, orderController.getOrderById);
router.put('/:id/status', protect, orderController.updateOrderStatus);
router.delete('/:id', protect, orderController.cancelOrder);

module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/auth');

// Routes pour les produits
router.post('/', authenticateToken, productController.createProduct);
router.get('/', authenticateToken, productController.getProducts);
router.put('/:id', authenticateToken, productController.updateProduct);
router.delete('/:id', authenticateToken, productController.deleteProduct);

module.exports = router;

const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/productsController');

// Definir las rutas de la API REST
router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProduct);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;

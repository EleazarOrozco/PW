const express = require('express');
const router = express.Router();

// Importar rutas de invoice.js
const invoiceRoutes = require('./invoice');
router.use('/invoice', invoiceRoutes);

// Importar rutas de productos.js
const productRoutes = require('./productos');
router.use('/product', productRoutes);

// Importar rutas de users.js
const userRoutes = require('./users');
router.use('/users', userRoutes);

// Ruta raíz
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Estás conectado' });
});

module.exports = router;

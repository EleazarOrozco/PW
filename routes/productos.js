const productController = require('../app/controllers/productos');
const router = require('express').Router();

// Ruta para buscar productos
router.get('/search', (req, res) => {
    productController.search(req, res);
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
    productController.getProduct(req, res);
});

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
    productController.getAllProducts(req, res);
});

// Ruta para crear un nuevo producto
router.post('/', (req, res) => {
    productController.createProduct(req, res);
});

// Ruta para editar un producto existente
router.put('/:id', (req, res) => {
    productController.editProduct(req, res);
});

module.exports = router;

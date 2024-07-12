const express = require('express');
const { getTopProducts, getProductById } = require('../controllers/productsControllers');

const router = express.Router();

router.get('/:categoryname/products', getTopProducts);
router.get('/:categoryname/products/:productid', getProductById);

module.exports = router;

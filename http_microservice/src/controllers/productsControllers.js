const productService = require('../services/productService');

exports.getTopProducts = async (req, res) => {
    const { categoryname } = req.params;
    const { n, page = 1, sortBy, order } = req.query;

    try {
        const products = await productService.fetchTopProducts(categoryname, n, page, sortBy, order);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    const { categoryname, productid } = req.params;

    try {
        const product = await productService.fetchProductById(categoryname, productid);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

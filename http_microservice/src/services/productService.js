const axios = require('axios');

const API_BASE_URL = 'http://20.244.56.144/test';

const generateUniqueId = (product) => {
    return `${product.company}-${product.productName}-${product.price}`;
};

exports.fetchTopProducts = async (categoryname, n, page, sortBy, order) => {
    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    let allProducts = [];

    for (const company of companies) {
        const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${categoryname}/products`);
        allProducts = allProducts.concat(response.data.map(product => ({ ...product, id: generateUniqueId(product), company })));
    }

    if (sortBy) {
        allProducts.sort((a, b) => {
            if (order === 'desc') {
                return b[sortBy] - a[sortBy];
            }
            return a[sortBy] - b[sortBy];
        });
    }

    const start = (page - 1) * n;
    const end = start + parseInt(n);
    const paginatedProducts = allProducts.slice(start, end);

    return {
        page,
        totalPages: Math.ceil(allProducts.length / n),
        products: paginatedProducts
    };
};

exports.fetchProductById = async (categoryname, productid) => {
    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    let product;

    for (const company of companies) {
        const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${categoryname}/products`);
        product = response.data.find(p => generateUniqueId(p) === productid);
        if (product) {
            return { ...product, id: generateUniqueId(product), company };
        }
    }

    return null;
};

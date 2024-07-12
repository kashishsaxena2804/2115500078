const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

const getProductsFromApi = async (categoryName) => {
  const response = await axios.get(`${MONGO_URI}/${categoryName}/products`, {
    headers: { 'Authorization': `Bearer ${JWT_SECRET}` }
  });
  
  return response.data.map(product => ({
    ...product,
    id: uuidv4()
  }));
};

const getProductFromApi = async (categoryName, productId) => {
  const response = await axios.get(`${MONGO_URI}/${categoryName}/products/${productId}`, {
    headers: { 'Authorization': `Bearer ${JWT_SECRET}` }
  });
  
  return response.data;
};

module.exports = {
  getProductsFromApi,
  getProductFromApi
};

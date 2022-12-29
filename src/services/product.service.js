const productDao = require("../models/product.dao");
const getProductByName = async (productName) => {
  return productDao.getProductByName(productName);
};

const getDetailByProductId = async (productId) => {
  return productDao.getDetailByProductId(productId);
};

module.exports = { getProductByName, getDetailByProductId };

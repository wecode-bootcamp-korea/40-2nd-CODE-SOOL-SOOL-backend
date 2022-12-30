const productDao = require("../models/product.dao");

const getProductByName = async (productName) => {
  return productDao.getProductByName(productName);
};

module.exports = { getProductByName };

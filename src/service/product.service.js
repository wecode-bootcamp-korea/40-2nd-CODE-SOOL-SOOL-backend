const productDao = require("../models/product.dao");

const getDetailByProductId = async (productId) => {
  return productDao.getDetailByProductId(productId);
};

module.exports = { getDetailByProductId };

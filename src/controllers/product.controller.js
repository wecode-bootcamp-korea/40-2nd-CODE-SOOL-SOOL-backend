const productService = require("../services/product.service");

const getProductByName = async (req, res) => {
  try {
    const { productName } = req.query;

    if (!productName) {
      throw new Error("Key Error");
    }

    const result = await productService.getProductByName(productName);

    return res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getProductByName };

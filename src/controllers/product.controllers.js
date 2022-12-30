const productService = require("../service/product.service");

const getDetailByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!productId) {
      throw new Error("Key Error");
    }
    const result = await productService.getDetailByProductId(productId);

    return res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getDetailByProductId };

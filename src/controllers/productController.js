const { productService } = require("../service");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const productListData = await productService.getAllProducts();
  res.status(200).json(productListData);
});

const getListByType = catchAsync(async (req, res, next) => {
  const data = req.query;
  const list = await productService.getList(data);
  return res.status(200).json(list);
});
const getProductByName = async (req, res) => {
  try {
    const { productName } = req.query;

    const result = await productService.getProductByName(productName);

    return res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

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

module.exports = {
  getListByType,
  getAllProducts,
  getProductByName,
  getDetailByProductId,
};

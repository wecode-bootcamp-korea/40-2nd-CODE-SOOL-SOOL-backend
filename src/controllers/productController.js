const { productService } = require('../service');
const { catchAsync } = require('../utils/error');

const getAllProducts = catchAsync(async (req, res) => {
  const productListData = await productService.getAllProducts();
  res.status(200).json(productListData);
});

const getListByType = catchAsync(async (req, res, next) => {
  const data = req.query
  const list = await productService.getList(data);
  return res.status(200).json(list);
}
)

module.exports = {
  getListByType,
  getAllProducts
};

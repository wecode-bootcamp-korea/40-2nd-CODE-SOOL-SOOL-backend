const { paymentService } = require('../service');
const { catchAsync } = require('../utils/error');

const getPaymeneList = catchAsync(async (req, res, next) => {
  const data = req.body
  const payment = await paymentService.getPaymeneList(data)
  return res.status(200).json(payment)
})

module.exports = { getPaymeneList }

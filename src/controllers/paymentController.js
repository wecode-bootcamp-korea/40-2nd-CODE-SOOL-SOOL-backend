const { paymentService } = require('../service');
const { catchAsync } = require('../utils/error');

const getPaymentList = catchAsync(async (req, res, next) => {
  const address = req.body.address
  const kakaoId = req.user.kakao_id
  const payment = await paymentService.paymentList(address,kakaoId)
  return res.status(200).json(payment)
})

module.exports = { getPaymentList }

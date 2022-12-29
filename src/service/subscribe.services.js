const subscribeDao = require("../models/subscribe.dao");

const getDetailBySubscribeId = async (
  address,
  totalPrice,
  productId,
  quantity,
  userId,
  name
) => {
  return subscribeDao.getDetailBySubscribeId(
    address,
    totalPrice,
    productId,
    quantity,
    userId,
    name
  );
};

module.exports = { getDetailBySubscribeId };

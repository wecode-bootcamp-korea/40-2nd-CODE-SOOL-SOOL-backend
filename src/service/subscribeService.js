const subscribeDao = require("../models/subscribeDao");

const createSubscription = async (address, totalPrice, quantity, userId) => {
  return subscribeDao.createSubscription(address, totalPrice, quantity, userId);
};

module.exports = { createSubscription };

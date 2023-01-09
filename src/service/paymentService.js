const { paymentDao } = require('../models');


const paymentList = async (address, kakaoId) => {
  const paymentData = await paymentDao.payment(address,kakaoId);
    return paymentData;
};

module.exports = { paymentList }
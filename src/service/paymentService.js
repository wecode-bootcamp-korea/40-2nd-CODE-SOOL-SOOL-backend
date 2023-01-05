const { paymentDao } = require('../models');


const paymentList = async () => {
  const data = await paymentDao.paymentList();
    return data;
};

module.exports = {paymentList}
const AppData = require('./dataSource');
const productDao = require('./productDao');
const paymentDao = require('./paymentDao')

module.exports = {
  productDao,
  paymentDao,
  AppData
};

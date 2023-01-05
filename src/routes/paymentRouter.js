const express = require('express');
const { paymentController } = require('../controllers');
const { loginRequired } = require('../utils/auth');
const router = express.Router();

router.get('/order',loginRequired, paymentController.getPaymeneList)

module.exports = router;
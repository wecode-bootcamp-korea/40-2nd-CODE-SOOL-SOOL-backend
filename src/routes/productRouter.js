const express = require('express');
const { productController } = require('../controllers');
const router = express.Router();


router.get('/', productController.getAllProducts);
router.get('/listing', productController.getListByType);

module.exports = router;
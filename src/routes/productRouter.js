const express = require('express');
const { productController } = require('../controllers');
const router = express.Router();


router.get('/', productController.getAllProducts);
router.get('/listing', productController.getListByType);
router.get("/detail/:productId", productController.getDetailByProductId);
router.get("/name", productController.getProductByName);

module.exports = router;
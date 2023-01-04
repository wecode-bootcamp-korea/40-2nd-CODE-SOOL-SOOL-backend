const express = require('express');
const { productController } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();


router.get('/', productController.getAllProducts);
router.get('/listing', productController.getListByType);
router.get("/detail/:productId", productController.getDetailByProductId);
router.get("/name", productController.getProductByName);
router.get('/cart',loginRequired,productController.getCartList)
router.post('/cart', loginRequired,productController.makeCart);
router.patch('/cart', loginRequired,productController.updateCart);


module.exports = router;
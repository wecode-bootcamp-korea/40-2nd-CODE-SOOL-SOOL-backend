const express = require("express");

const { kakaoRouter } = require("./kakao.router");
const { productRouter } = require("./product.router");

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);

module.exports = router;

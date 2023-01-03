const express = require("express");

const { kakaoRouter } = require("./kakao.router");
const { productRouter } = require("./product.router");

const router = express.Router();

router.use("/auth", kakaoRouter);
router.use("/products", productRouter);

module.exports = router;

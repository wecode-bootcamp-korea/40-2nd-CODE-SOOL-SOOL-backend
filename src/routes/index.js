const express = require("express");

const { kakaoRouter } = require("./kakaoRouter");
const { productRouter } = require("./productRouter");
const { subscribeRouter } = require("./subscribe.routes");

const router = express.Router();

router.use("/subscribe", subscribeRouter);
router.use("/auth", kakaoRouter);
router.use("/products", productRouter);

module.exports = router;

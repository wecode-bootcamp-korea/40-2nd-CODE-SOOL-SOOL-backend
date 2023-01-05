const express = require("express");

const kakaoRouter = require("./kakaoRouter");
const productRouter = require("./productRouter");
const subsribeRouter = require("./subscribe.router");

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);
router.use("/subscribe", subsribeRouter);

module.exports = router;

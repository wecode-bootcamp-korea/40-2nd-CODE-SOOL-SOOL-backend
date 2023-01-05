const express = require("express");

const kakaoRouter = require("./kakaoRouter");
const productRouter = require("./productRouter");
const paymentRouter = require("./paymentRouter")
const subsribeRouter = require("./subscribeRouter");

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);
router.use("/payments", paymentRouter);
router.use("/subscribe", subsribeRouter);


module.exports = router;

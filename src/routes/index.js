const express = require("express");

const kakaoRouter = require("./kakaoRouter");
const productRouter = require("./productRouter");
const subsribeRouter = require("./subscribeRouter");
const paymentRouter = require("./paymentRouter")

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);
router.use("/subscribe", subsribeRouter);
router.use("/payments", paymentRouter);



module.exports = router;

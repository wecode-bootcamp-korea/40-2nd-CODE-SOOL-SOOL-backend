const express = require("express");

const kakaoRouter = require("./kakaoRouter");
const productRouter = require("./productRouter");
const paymentRouter = require("./paymentRouter")

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);
router.use("/payments", paymentRouter);


module.exports = router;

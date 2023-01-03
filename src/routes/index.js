const express = require("express");

const kakaoRouter = require("./kakaoRouter");
const productRouter = require("./productRouter");

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", kakaoRouter);


module.exports = router;

const express = require("express");

const { kakaoRouter } = require("./kakao.router");
const router = express.Router();

router.use("/auth", kakaoRouter);
module.exports = router;

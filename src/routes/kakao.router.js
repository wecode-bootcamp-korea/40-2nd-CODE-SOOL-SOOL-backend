const express = require("express");

const kakaoController = require("../controllers/kakao.controllers");

const kakaoRouter = express.Router();

kakaoRouter.get("/signin", kakaoController.kakaoSignIn);

module.exports = { kakaoRouter };

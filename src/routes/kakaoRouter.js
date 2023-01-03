const express = require("express");

const { kakaoController } = require("../controllers");

const router = express.Router();

router.get("/signin", kakaoController.kakaoSignIn);

module.exports = router;

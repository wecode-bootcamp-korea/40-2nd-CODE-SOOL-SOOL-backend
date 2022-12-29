const express = require("express");

const { kakaoController } = require("../controllers/kakaoControllers");

const router = express.Router();

router.get("/signin", kakaoController.kakaoSignIn);

module.exports = router;

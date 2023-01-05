const express = require("express");
const subscribeController = require("../controllers/subscribeController");
const { tokenRequired } = require("../utils/auth.js");
const router = express.Router();

router.post("", tokenRequired, subscribeController.createSubscription);

module.exports = router;

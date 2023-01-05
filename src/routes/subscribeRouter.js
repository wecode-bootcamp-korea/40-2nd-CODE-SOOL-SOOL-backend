const express = require("express");
const subscribeController = require("../controllers/subscribeController");
const { tokenRequired, loginRequired } = require("../utils/auth.js");
const router = express.Router();

router.post("", loginRequired, subscribeController.createSubscription);

module.exports = router;

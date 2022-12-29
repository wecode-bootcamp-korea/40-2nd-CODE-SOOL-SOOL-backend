const express = require("express");

const { tokenRequired } = require("../utils/auth.js");
const subscribeController = require("../controllers/subscribe.controllers");

const subscribeRouter = express.Router();

subscribeRouter.post(
  "/user",
  tokenRequired,
  subscribeController.getDetailBySubscribeId
);

module.exports = { subscribeRouter };

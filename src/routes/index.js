const express = require("express");

const { authRouter } = require("./auth.router");

const routes = express.Router();

routes.use("/auth", authRouter);

module.exports = { routes };

const express = require("express");

const productController = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/name", productController.getProductByName);

module.exports = { productRouter };

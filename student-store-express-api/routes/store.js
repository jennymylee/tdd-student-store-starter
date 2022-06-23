const Store = require("../models/store");
const { NotFoundError, BadRequestError } = require("../utils/errors");
const express = require("express");
const router = express.Router();
// const products = require("../data/db.json");

// list all products
router.get("/", async (req, res, next) => {
  try {
    console.log("in here");
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

// fetch single transaction
router.get("/:productId", async (req, res, next) => {
  try {
    console.log("in product route");
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    if (!product) {
      throw new NotFoundError("Transaction not found");
    }
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

// create new purchsse order
router.post("/checkout", async (req, res, next) => {
  try {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;
    console.log("sc and u", shoppingCart, user);

    const newPurchase = await Store.createNewPurchase(shoppingCart, user);
    res.status(201).json({ purchase: newPurchase });
  } catch (err) {
    next(err);
  }
});
module.exports = router;

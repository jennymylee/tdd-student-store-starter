const Store = require("../models/store");
const { NotFoundError, BadRequestError } = require("../utils/errors");
const express = require("express");
const router = express.Router();
// const products = require("../data/db.json");

// list all products
router.get("/store", async (req, res, next) => {
  try {
    // console.log("in here");
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});
// list all purchases
router.get("/purchases", async (req, res, next) => {
  try {
    // console.log("in here");
    const purchases = await Store.listPurchases();
    res.status(200).json({ purchases });
  } catch (err) {
    next(err);
  }
});

// fetch single purchase
router.get("/purchases/:purchaseId", async (req, res, next) => {
  try {
    console.log("in product route");
    const purchaseId = req.params.purchaseId;
    const purchase = await Store.fetchPurchaseById(purchaseId);
    if (!purchase) {
      throw new NotFoundError("Order not found");
    }
    res.status(200).json({ purchase });
  } catch (err) {
    next(err);
  }
});

// fetch single transaction
router.get("/store/:productId", async (req, res, next) => {
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

// create new purchase order
router.post("/store", async (req, res, next) => {
  try {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;

    const newPurchase = await Store.createNewPurchase(shoppingCart, user);
    res.status(201).json({ purchase: newPurchase });
  } catch (err) {
    next(err);
  }
});
module.exports = router;

const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static listProducts() {
    // list all items in the products array
    const products = storage.get("products").value();
    return products;
  }

  static fetchProductById(itemId) {
    // fetch a single product
    console.log("fetch");
    const product = storage
      .get("products")
      .find({ id: Number(itemId) })
      .value();

    console.log(product);
    return product;
  }

  static createNewPurchase(shoppingCart, user) {
    if (!shoppingCart || !user) {
      throw new BadRequestError("either shopping art or user is missing");
    }
    console.log("shopping cart before", shoppingCart.length);

    const noDups = new Set(shoppingCart);

    if (shoppingCart.length !== noDups.size) {
      console.log("shopping cart after", noDups.size);
      throw new BadRequestError("there are duplicate items in shopping cart");
    }

    for (let i = 0; i < shoppingCart.length; i++) {
      if (!shoppingCart[i].quantity || !shoppingCart[i].itemId) {
        throw new BadRequestError(
          "missing either quantity or itemId in an item"
        );
      }
    }

    let calculatedTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      let quantity = shoppingCart[i].quantity;
      let itemId = shoppingCart[i].itemId;
      let unitPrice = Store.fetchProductById(itemId).price;
      calculatedTotal = calculatedTotal + quantity * unitPrice;
    }

    // add tax
    calculatedTotal = calculatedTotal + 1.0875 * calculatedTotal;

    let dateAndTime = new Date().toISOString();
    let newPurchase = {
      id: storage.get("purchases").length + 1,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: calculatedTotal,
      createdAt: dateAndTime,
    };

    storage.get("purchases").push(newPurchase).write();
    return newPurchase;
  }
}

module.exports = Store;

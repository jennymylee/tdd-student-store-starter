import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import SubNavbar from "../SubNavbar/SubNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "../Hero/Hero";
import axios from "axios";

export default function App() {
  let [products, setProducts] = React.useState([]);
  let [isFetching, setIsFetching] = React.useState(false);
  let [error, setError] = React.useState("");
  let [isOpen, setIsOpen] = React.useState(false);
  //shoppingCart is an array of objects: [{itemId: 3, quantity: 2}]
  let [shoppingCart, setShoppingCart] = React.useState([]);
  //might change checkoutForm later
  let [checkoutForm, setCheckoutForm] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  const getQuantity = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        return shoppingCart[i].quantity;
      }
    }
    return 0;
  };

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    let scCopy = shoppingCart;
    let scCopy2 = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        let newSC = shoppingCart
          .slice(0, i)
          .concat([
            { itemId: productId, quantity: shoppingCart[i].quantity + 1 },
          ]);
        newSC = newSC.concat(scCopy.slice(i + 1));
        setShoppingCart(newSC);
        console.log("it is in", newSC);
        return;
      }
    }
    scCopy.push({ itemId: productId, quantity: 1 });
    setShoppingCart(scCopy);
    console.log("add", shoppingCart);
    //  It should add the price of the product to the total price of the shoppingCart.
  };
  const handleRemoveItemFromCart = (productId) => {
    let scCopy = shoppingCart;
    let scCopy2 = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        if (shoppingCart[i].itemId !== 1) {
          // if quantity > 1 before decrement
          let newSC = scCopy2
            .slice(0, i)
            .concat([
              { itemId: productId, quantity: shoppingCart[i].quantity - 1 },
            ]);
          newSC = newSC.concat(scCopy.slice(i + 1));
          setShoppingCart(newSC);
        } else {
          //remove item from shopping cart
          let newSC = scCopy2.slice(0, i).concat(scCopy.slice(i + 1));
          setShoppingCart(newSC);
        }
      }
    }
  };
  const handleOnCheckoutFormChange = ({ name, value }) => {
    // setCheckoutForm()
  };
  const handleOnSubmitCheckoutForm = () => {};

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={products}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnsubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                  />
                  <Home
                    products={products}
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    getQuantity={getQuantity}
                  />
                </>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <>
                  <Navbar />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={products}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnsubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                  />
                  <Hero />
                  <SubNavbar />
                  <ProductDetail
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    getQuantity={getQuantity}
                  />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
        console.log(response.data.products);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    //     It should accept a single argument - productId
    //  It should add that product to the shoppingCart if it doesn't exist, and set its quantity to 1.
    //  If it does exist, it should increase the quantity by 1.
    // if (
    //   shoppingCart.some((el) => {
    //     return el.itemId == productId;
    //   })
    // ) {
    // }
    // for (var i = 0; i < shoppingCart.length; i++) {
    //   if (shoppingCart[i][itemId] == productId) {
    //     setShoppingCart(
    //       shoppingCart
    //         .slice(0, i)
    //         .concat(
    //           [{ itemId: productId, quantity: shoppingCart[i][quantity] + 1 }],
    //           shoppingCart.slice(i + 1, -1)
    //         )
    //     );
    //     return;
    //   }
    // }
    // return ;
    //  It should add the price of the product to the total price of the shoppingCart.
  };
  const handleRemoveItemToCart = (productId) => {};
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
                  <Sidebar />
                  <Home
                    products={products}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                  />
                </>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <>
                  <Navbar />
                  <Sidebar />
                  {/* add productDetail component */}
                </>
              }
            />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

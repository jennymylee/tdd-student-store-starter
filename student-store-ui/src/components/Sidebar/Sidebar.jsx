import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      {isOpen == false && (
        <div className="sidebar-closed">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">add_shopping_cart</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">monetization_on</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">fact_check</i>
          </button>
        </div>
      )}
      {isOpen == true && (
        <div className="sidebar-open">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">arrow_backward</i>
          </button>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        </div>
      )}
    </section>
  );
}

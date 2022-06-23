import * as React from "react";
import "./CheckoutForm.css";
import axios from "axios";
import Contact from "../Contact/Contact";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  //   console.log(handleOnCheckoutFormChange);
  //   console.log(handleOnSubmitCheckoutForm);
  //   const [error, setError] = React.useState("");
  //   const [name, setName] = React.useState("");
  //   const [email, setEmail] = React.useState("");
  //   console.log("checkout form", checkoutForm);
  //   const handleOnSubmit = () => {
  //     if (shoppingCart.length) {
  //       setError("No cart or items in cart found to check out.");
  //     }
  //   };

  //   const handleOnFormFieldChange = (change) => {
  //     console.log("change", change.target.value);
  //     if (change.target.name == "name") {
  //       setName(change.target.value);
  //       handleOnCheckoutFormChange("name", change.target.value);
  //     }
  //     if (change.target.name == "email") {
  //       setEmail(change.target.value);
  //       handleOnCheckoutFormChange("email", change.target.value);
  //     }
  //   };
  return (
    <div className="checkout-form">
      <h1 className="cf-title">Payment Info</h1>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={checkoutForm.name}
            onChange={(evt) =>
              handleOnCheckoutFormChange("name", evt.target.value)
            }
            className="checkout-form-input"
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={checkoutForm.email}
            onChange={(evt) =>
              handleOnCheckoutFormChange("email", evt.target.value)
            }
            className="checkout-form-input"
          ></input>
        </div>
      </div>

      <button
        type="button"
        className="checkout-button"
        onClick={() => handleOnSubmitCheckoutForm()}
      >
        Checkout
      </button>
    </div>
  );
}

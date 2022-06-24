import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  setCheckoutFormSubmitSuccess,
  checkoutFormSubmitSuccess,
  receipt,
  setReceipt,
  products,
  error,
}) {
  const getProductNameAndPrice = (itemId) => {
    for (let i = 0; i < products.length; i++) {
      if (itemId == products[i].id) {
        return [products[i].name, products[i].price];
      }
    }
  };

  console.log("ro", receipt.order);
  const [hasCheckedOut, setHasCheckedOut] = React.useState(false);
  return (
    <div className="checkout-form">
      <h1 className="cf-title">Payment Info</h1>
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
      {hasCheckedOut && checkoutFormSubmitSuccess == false && (
        <p className="error">Error: {error}</p>
      )}
      <button
        type="button"
        className="checkout-button"
        onClick={() => {
          handleOnSubmitCheckoutForm();
          if (!error) {
            setHasCheckedOut(!hasCheckedOut);
          }
        }}
      >
        Checkout
      </button>

      <h1 className="ci-title">Checkout Info</h1>
      {hasCheckedOut == false && (
        <p className="ci-false-body">
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to your
          dorm room.
        </p>
      )}
      {hasCheckedOut && checkoutFormSubmitSuccess == false && (
        <p className="ci-false-body">
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to your
          dorm room.
        </p>
      )}
      {hasCheckedOut && checkoutFormSubmitSuccess && (
        <>
          <p className="success">Success!</p>
          <p className="ci-true-body">
            <b>Receipt</b>
            <br />
            Showing receipt for {receipt.name} available at
            {receipt.email}:<br />
            {receipt.order &&
              receipt.order.map((ord, i) => (
                <li key={i}>
                  {ord.quantity} total {getProductNameAndPrice(ord.itemId)[0]}{" "}
                  purchased at a cost of $
                  {getProductNameAndPrice(ord.itemId)[1]} for a total cost of $
                  {(
                    ord.quantity * getProductNameAndPrice(ord.itemId)[1]
                  ).toFixed(2)}
                  .
                </li>
              ))}
            <li>
              Before taxes, the subtotal was $
              {(receipt.total / 1.0875).toFixed(2)}
            </li>
            <li>
              After taxes and fees were applied, the total comes out to $
              {(receipt.total * 1).toFixed(2)}
            </li>
          </p>

          <button
            type="button"
            className="exit-button"
            onClick={() => {
              setCheckoutFormSubmitSuccess(!checkoutFormSubmitSuccess);
              setHasCheckedOut(!hasCheckedOut);
            }}
          >
            Exit
          </button>
        </>
      )}
    </div>
  );
}

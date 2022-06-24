import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
  isFetching,
  setIsFetching,
  checkoutFormSubmitSuccess,
}) {
  const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
  React.useEffect(
    () => {
      console.log("check out success");
      if (checkoutFormSubmitSuccess == false) {
        setCurrentQuantity(0);
      }
    },
    { checkoutFormSubmitSuccess }
  );
  return (
    <div className="product-card">
      <div className="media">
        {showDescription ? (
          <img className="pc-image" src={product.image} />
        ) : (
          <Link to={`/products/${product.id}`}>
            <img
              className="pc-image"
              src={product.image}
              onClick={() => setIsFetching(true)}
            />
          </Link>
        )}
      </div>
      <div className="product-info">
        <div className="pc-data">
          <p className="product-name">{product.name}</p>
          <div className="stars">
            <svg
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z"
                fill="#e5a800"
              ></path>
            </svg>
            <svg
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z"
                fill="#e5a800"
              ></path>
            </svg>
            <svg
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z"
                fill="#e5a800"
              ></path>
            </svg>
            <svg
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z"
                fill="#e5a800"
              ></path>
            </svg>
            <svg
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              class
              fill="none"
            >
              <path
                d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z"
                fill="#cbd4e6"
              ></path>
              <path
                d="M16.0009 2.66666C15.407 2.66666 14.8132 2.97399 14.5059 3.59387L11.1044 10.4906L3.49395 11.595C2.12918 11.7929 1.58223 13.4754 2.57195 14.4391L8.07791 19.8044L6.77565 27.3836C6.54125 28.7431 7.97373 29.7797 9.19265 29.139L16.0009 25.5656V2.66666Z"
                fill="#e5a800"
              ></path>
            </svg>
          </div>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>

        {showDescription && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="pc-buttons">
          <button
            className="add"
            onClick={() => {
              handleAddItemToCart(productId);
              setCurrentQuantity(currentQuantity + 1);
            }}
          >
            <i className="material-icons">add</i>
          </button>
          <div className="pc-right-col">
            <button
              className="remove"
              onClick={() => {
                handleRemoveItemFromCart(productId);
                if (currentQuantity !== 0) {
                  setCurrentQuantity(currentQuantity - 1);
                }
              }}
            >
              <i className="material-icons">remove</i>
            </button>
            {currentQuantity !== 0 && (
              <span className="product-quantity">{currentQuantity}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  isFetching,
  setIsFetching,
}) {
  return (
    <div className="product-view">
      <div className="pv-content">
        <h1 className="product-id">Product # {productId}</h1>
        <ProductCard
          product={product}
          productId={productId}
          quantity={quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={true}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
        />
      </div>
    </div>
  );
}

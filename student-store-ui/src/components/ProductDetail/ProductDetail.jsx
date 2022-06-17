import * as React from "react";
import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";

import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  isFetching,
  setIsFetching,
}) {
  const [product, setProduct] = React.useState(null);
  const { productId } = useParams();

  let navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then((response) => {
        setProduct(response.data.product);
        setIsFetching(false);
      })
      .catch((e) => {
        <NotFound />;
      });
  }, []);

  return (
    <div className="product-detail">
      <div className="pd-content">
        <h1 className="loading">{isFetching == true ? "Loading..." : null}</h1>
        {product ? (
          <ProductView
            product={product}
            productId={productId}
            quantity={2}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
          />
        ) : (
          navigate("/pageNotFound")
        )}
      </div>
    </div>
  );
}

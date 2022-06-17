import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  isFetching,
  setIsFetching,
}) {
  return (
    <div className="home">
      <Hero />

      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

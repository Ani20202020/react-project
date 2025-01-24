import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (!product.title?.toLowerCase || !product.description?.toLowerCase) return false;
  
    const searchTerms = searchTerm.toLowerCase().split(" ");
  
    return searchTerms.every((term) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });
  

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const top = Math.random() * 100; 
      const left = Math.random() * 100; 
      stars.push(
        <div
          className="star"
          key={i}
          style={{ top: `${top}%`, left: `${left}%` }}
        ></div>
      );
    }
    return stars;
  };

  return (
    <div className="App">
      { }
      <div className="starry-background">{renderStars()}</div>

      { }
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Product List</h1>
        <input
          type="text"
          placeholder="Search products by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Shop from "./page/Shop";
import Cart from "./page/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (title) => {
    setCart([...cart, title]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

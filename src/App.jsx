import React from "react";
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className=" h-screen w-full ">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
};

export default App;

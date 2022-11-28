import React from "react";
import './App.css';
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { TbDiscount2 } from "react-icons/tb";
import { BsFillFilePersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

//PAGES
import About from "./pages/About";
import AboutDetail from "./pages/AboutDetail";
import Landing from "./pages/Discount";
import DiscountDetail from "./pages/DiscountDetail";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="appHeader">
          <img className="logo" src="logo.png"/>
        </div>
      </header>
      <Routes>
          {/* <Route path="/" element={<Landing />}/>
          <Route path="/" element={<DiscountDetail />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/About" element={<About />}/>
          
          <Route path="/AboutDetail" element={<AboutDetail />}/> */}
          <Route path="/About" element={<About />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/AboutDetail" element={<AboutDetail />}/>
          <Route path="/" element={<Landing />}/>
          <Route path="/ProductsDetail/:id" element={<ProductsDetail />}/>
      </Routes>
      <footer>
      <NavLink to="/Products" className="iconWrapper">
          <HiShoppingCart className="icon" />
          Products
        </NavLink>
        <NavLink to="/" className="iconWrapper">
          <TbDiscount2 className="icon" />
          Budget
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <BsFillFilePersonFill className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;

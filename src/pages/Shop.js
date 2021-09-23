import React from "react";
import "../styles/Shop.css";
import {BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div class="shop-container">
        <div class="upper-div">
            <Link to="/" class="link">
                <BiArrowBack class="arrow"/>
            </Link>
            <Link to="/" class="link">
            <h1>Catalog</h1>
            </Link>
        </div>
      <div class="product-container">
        <div class="main-product">
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

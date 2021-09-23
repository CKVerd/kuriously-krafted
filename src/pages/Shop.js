import React from "react";
import "../styles/Shop.css";
import {BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";
import item1 from "../images/Bracelet1-1.jpg";
import item2 from "../images/Bracelet1.jpg";
import item3 from "../images/Bracelet2-2.jpg";
import item4 from "../images/Bracelet2.jpg";
import item5 from "../images/Earrings1-1.jpg";
import item6 from "../images/Earrings1.jpg";
import item7 from "../images/Earrings2-1.jpg";
import item8 from "../images/Earrings2.jpg";
import { useState } from "react";
import "animate.css/animate.min.css"

function Shop() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Bracelet 1",
            desc: "Laboris aute ut culpa quis proident.",
            image: item1
        },
        {
            id: 2,
            name: "Bracelet 2",
            desc: "Ex cupidatat aliquip sit labore dolor fugiat deserunt minim cillum.",
            image: item2
        },
        {
            id: 3,
            name: "Bracelet 3",
            desc: "Et aliqua esse aute laboris et.",
            image: item3
        },
        {
            id: 4,
            name: "Bracelet 4",
            desc: "Labore est exercitation anim est.",
            image: item4
        },
        {
            id: 5,
            name: "Earrings 1",
            desc: "Eiusmod consectetur sint ullamco ex minim eiusmod.",
            image: item5
        },
        {
            id: 6,
            name: "Earrings 1",
            desc: "Eu quis qui laborum minim cillum sunt ipsum.",
            image: item6
        },
        {
            id: 7,
            name: "Earrings 1",
            desc: "Anim amet eu irure consequat amet excepteur.",
            image: item7
        },
        {
            id: 8,
            name: "Earrings 1",
            desc: "Id ex cupidatat laborum elit.",
            image: item8
        },
    ])
  return (
    <div class="shop-container">
        <div class="upper-div animate__animated animate__fadeInDown">
            <Link to="/" class="link">
                <BiArrowBack class="arrow"/>
            </Link>
            <Link to="/" class="link">
            <h1>Catalog</h1>
            </Link>
        </div>
      <div class="product-container">
        <div class="main-product">
          {products.map((prods, idx)=>{
              return(
                  <div class="product-card animate__animated animate__fadeInDown" key={idx}>
                    <img src={prods.image} class="product-image"></img>
                    <h3>{prods.name}</h3>
                    <h4>{prods.desc}</h4>
                  </div>
              ); 
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;

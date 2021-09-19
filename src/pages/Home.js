import React from "react";
import "../styles/Home.css";
import Logo from "../images/logonew2.png";
import Woman from "../images/woman 2.png";
function Home() {
  return (
    <div className="container">
      <section id="header">
        <div className="header-inner">
          <div className="header-links">
            <a href="#shop">Shop</a>
            <a href="#header">
              <img className="logo" src={Logo} alt="logo"></img>
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="image-background">
          <h1 className="h1-1">Kuriously</h1>
          <h1 className="h1-2">Krafted.</h1>
          <img src={Woman} alt="woman"></img>
        </div>
      </section>
      <section>
        <div className="about">

        </div>
      </section>
    </div>
  );
}

export default Home;

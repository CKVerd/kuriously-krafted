import React from "react";
import "../styles/Home.css";
import Logo from "../images/logonew2.png";
import Woman from "../images/woman 2.png";
import Mod1 from "../images/Earrings1.jpg";
import Mod2 from "../images/Earrings1-1.jpg";
import Mod3 from "../images/Earrings2-1.jpg";
import Mod4 from "../images/Earrings2.jpg";
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tortor, lacus, pharetra urna quis nunc augue. Nam ante nisi semper
            libero, venenatis at senectus imperdiet maecenas.
          </p>
        </div>
      </section>
      <section>
        <div className="modular-collection">
          <div className="text-div">
            <h1>MODULAR</h1>
            <h2>collection</h2>
            <a className="shop" href="#sd">
              <div className="shop-button">Shop</div>
            </a>
          </div>
          <div className="images">
            <img src={Mod1} className="Mod-img-1" alt="prod1"></img>
            <img src={Mod2} className="Mod-img-2" alt="prod2"></img>
            <img src={Mod3} className="Mod-img-3" alt="prod3"></img>
            <img src={Mod4} className="Mod-img-4" alt="prod4"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="review">
          <h1>REVIEW</h1>
          <h2>customer name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tortor, lacus, pharetra urna quis nunc augue. Nam ante nisi semper
            libero, venenatis at senectus imperdiet maecenas.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

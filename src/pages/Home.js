import React from "react";
import "../styles/Home.css";
import Logo from "../images/logonew2.png";
import Woman from "../images/woman 2.png";
import Mod1 from "../images/Earrings1.jpg";
import Mod2 from "../images/Earrings1-1.jpg";
import Mod3 from "../images/Earrings2-1.jpg";
import Mod4 from "../images/Earrings2.jpg";
import Brace1 from "../images/Bracelet1.jpg";
import Brace2 from "../images/Bracelet1-1.jpg";
import Brace3 from "../images/Bracelet2.jpg";
import Brace4 from "../images/Bracelet2-2.jpg";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

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
            libero, venenatis at senectus.
          </p>
        </div>
      </section>
      <section>
        <div className="modular-collection">
          <div className="text-div">
            <h1>BRACELET</h1>
            <h2>collection</h2>
            <a className="shop" href="#sd">
              <div className="shop-button">Shop</div>
            </a>
          </div>
          <div className="images">
            <img src={Brace1} className="Mod-img-1" alt="prod1"></img>
            <img src={Brace2} className="Mod-img-2" alt="prod2"></img>
            <img src={Brace3} className="Mod-img-3" alt="prod3"></img>
            <img src={Brace4} className="Mod-img-4" alt="prod4"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="follow-links">
          <h1>follow us!</h1>
          <div className="main-links">
            <a>
              <FiInstagram class="icon" color="#9e9679" />
            </a>
            <a>
              <FiFacebook class="icon" color="#9e9679" />
            </a>
            <a>
              <FiTwitter class="icon" color="#9e9679" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="message">
          <h1>SEND A MESSAGE</h1>
          <input
            type="text"
            class="contact-subject"
            placeholder="Subject"
          ></input>
          <input
            type="email"
            class="contact-email"
            placeholder="E-mail"
          ></input>
          <textarea
            type="text"
            class="contact-message"
            rows="7"
            placeholder="Message"
          ></textarea>
          <input type="button" value="Send" class="contact-button"></input>
        </div>
      </section>
      <footer>
        <a>
          <ImLinkedin size="0.9rem"/>
        </a>
        <h1>(C) Cyril Verdad</h1>
        <a>
          <ImGithub size="0.9rem"/>
        </a>
      </footer>
    </div>
  );
}

export default Home;

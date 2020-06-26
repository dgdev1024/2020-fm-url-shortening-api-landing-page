/**
 * @file com/header/index.jsx
 */

import React, { useState } from "react";
import Logo from "../svg/logo";
import "./index.scss";

const Header = ({ toggleDark, darkMode }) => {
  const [shown, setShown] = useState(false);
  const toggleShown = () => setShown(!shown);
  const resetShown = () => setShown(false);

  return (
    <header className="header" onMouseLeave={resetShown}>
      <div className="container header__container">
        <div className="header__logo logo">
          <Logo className="header__logo-svg logo-svg" viewBox="0 0 121 33" />
        </div>
        <nav className={`header__nav ${shown && "header__nav--shown"}`}>
          <div className="header__nav-first">
            <a href="#" className="link header__link">
              Features
            </a>
            <a href="#" className="link header__link">
              Pricing
            </a>
            <a href="#" className="link header__link">
              Resources
            </a>
          </div>
          <div className="header__nav-second">
            <a href="#" className="link header__link">
              Login
            </a>
            <a
              href="#"
              className="link header__link header__cta button button--cta"
            >
              Sign Up
            </a>
            <a href="#" className="link header__link" onClick={toggleDark}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </a>
          </div>
        </nav>
        <button
          className="button header__toggle"
          aria-label="Toggle Menu"
          onClick={toggleShown}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;

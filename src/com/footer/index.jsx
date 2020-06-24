/**
 * @file com/footer/index.jsx
 */

import React from "react";
import Logo from "../svg/logo";
import IconFacebook from "../svg/icon-facebook";
import IconTwitter from "../svg/icon-twitter";
import IconPinterest from "../svg/icon-pinterest";
import IconInstagram from "../svg/icon-instagram";
import "./index.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="logo footer__logo">
        <Logo
          className="logo-svg logo-svg--footer footer__logo-svg"
          viewBox="0 0 121 33"
        />
      </div>
      <div className="footer__links">
        <h4 className="heading footer__heading">Features</h4>
        <a href="#" className="link footer__link">
          Link Shortening
        </a>
        <a href="#" className="link footer__link">
          Branded Links
        </a>
        <a href="#" className="link footer__link">
          Analytics
        </a>
      </div>
      <div className="footer__links">
        <h4 className="heading footer__heading">Resources</h4>
        <a href="#" className="link footer__link">
          Blog
        </a>
        <a href="#" className="link footer__link">
          Developers
        </a>
        <a href="#" className="link footer__link">
          Support
        </a>
      </div>
      <div className="footer__links">
        <h4 className="heading footer__heading">Company</h4>
        <a href="#" className="link footer__link">
          About
        </a>
        <a href="#" className="link footer__link">
          Our Team
        </a>
        <a href="#" className="link footer__link">
          Careers
        </a>
        <a href="#" className="link footer__link">
          Contact
        </a>
      </div>
      <div className="footer__social-links">
        <a
          href="#"
          className="link footer__social-link footer__social-link--facebook"
          aria-label="Facebook"
          title="Facebook"
        >
          <IconFacebook />
        </a>
        <a
          href="#"
          className="link footer__social-link footer__social-link--twitter"
          aria-label="Twitter"
          title="Twitter"
        >
          <IconTwitter />
        </a>
        <a
          href="#"
          className="link footer__social-link footer__social-link--pinterest"
          aria-label="Pinterest"
          title="Pinterest"
        >
          <IconPinterest />
        </a>
        <a
          href="#"
          className="link footer__social-link footer__social-link--instagram"
          aria-label="Instagram"
          title="Instagram"
        >
          <IconInstagram />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

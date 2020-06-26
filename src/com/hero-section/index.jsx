/**
 * @file com/hero-section/index.jsx
 */

import React from "react";
import ImageWorking from "../../img/illustration-working.svg";
import ImageWorkingDark from "../../img/illustration-working-dark.svg";
import "./index.scss";

const HeroSection = ({ dark }) => (
  <section className="section hero">
    <div className="container hero__container">
      <img
        src={dark ? ImageWorkingDark : ImageWorking}
        alt="More Than Just Shorter Links"
        className="hero__image"
      />
      <div className="hero__caption">
        <h1 className="heading heading--large heading--align-left-on-medium hero__heading">
          More than just shorter links
        </h1>
        <p className="text text--align-left-on-medium hero__text">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="button button--cta hero__button">Get Started</button>
      </div>
    </div>
  </section>
);

export default HeroSection;

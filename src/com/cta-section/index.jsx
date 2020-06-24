/**
 * @file com/cta-section/index.jsx
 */

import React from "react";
import "./index.scss";

const CtaSection = () => (
  <section className="section cta">
    <div className="container cta__container">
      <h2 className="heading heading--medium cta__heading">
        Boost your links today
      </h2>
      <button className="button button--cta cta__button">Get Started</button>
    </div>
  </section>
);

export default CtaSection;

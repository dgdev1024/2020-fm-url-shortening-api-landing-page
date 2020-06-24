/**
 * @file com/statistics-section/index.jsx
 */

import React from "react";
import IconBrand from "../../img/icon-brand-recognition.svg";
import IconRecords from "../../img/icon-detailed-records.svg";
import IconFully from "../../img/icon-fully-customizable.svg";
import "./index.scss";

const StatisticsSection = () => (
  <section className="section statistics">
    <div className="container statistics__container">
      <h2 className="heading heading--medium statistics__heading">
        Advanced Statistics
      </h2>
      <p className="text text--small statistics__text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="statistics__cards">
        <div className="statistics__card">
          <div className="statistics__image-container">
            <img
              src={IconBrand}
              alt="Brand Recognition"
              className="statistics__image"
            />
          </div>
          <h3 className="heading heading--small heading--align-left-on-medium">
            Brand Recognition
          </h3>
          <p className="text text--smaller text--align-left-on-medium">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="statistics__card">
          <div className="statistics__image-container">
            <img
              src={IconRecords}
              alt="Detailed Records"
              className="statistics__image"
            />
          </div>
          <h3 className="heading heading--small heading--align-left-on-medium">
            Detailed Records
          </h3>
          <p className="text text--smaller text--align-left-on-medium">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="statistics__card">
          <div className="statistics__image-container">
            <img
              src={IconFully}
              alt="Fully Customizable"
              className="statistics__image"
            />
          </div>
          <h3 className="heading heading--small heading--align-left-on-medium">
            Fully Customizable
          </h3>
          <p className="text text--smaller text--align-left-on-medium">
            Imporve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatisticsSection;

/**
 * @file com/app.jsx
 */

import React from "react";
import StatisticsSection from "./statistics-section";
import CtaSection from "./cta-section";
import Footer from "./footer";

const App = () => (
  <main className="main">
    <StatisticsSection />
    <CtaSection />
    <Footer />
  </main>
);

export default App;

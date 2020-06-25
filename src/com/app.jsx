/**
 * @file com/app.jsx
 */

import React from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import LinksSection from "./links-section";
import StatisticsSection from "./statistics-section";
import CtaSection from "./cta-section";
import Footer from "./footer";

const App = () => {
  const [dark, setDark] = useLocalStorage("-fm-dark-mode", false);

  return (
    <main className={`main ${dark && "main--dark"}`}>
      <LinksSection />
      <StatisticsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default App;

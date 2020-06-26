/**
 * @file com/app.jsx
 */

import React from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import Header from "./header";
import HeroSection from "./hero-section";
import LinksSection from "./links-section";
import StatisticsSection from "./statistics-section";
import CtaSection from "./cta-section";
import Footer from "./footer";

const App = () => {
  const [dark, setDark] = useLocalStorage("-fm-dark-mode", false);
  const toggleDark = (ev) => {
    ev.preventDefault();
    setDark(!dark);
  };

  return (
    <main className={`main ${dark && "main--dark"}`}>
      <Header toggleDark={toggleDark} darkMode={dark} />
      <HeroSection dark={dark} />
      <LinksSection />
      <StatisticsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default App;

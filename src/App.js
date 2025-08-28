import Services from "./components/Services";
import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import Pricing from "./components/Pricing";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroller-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.25 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <section className="scroller-section home-section">
        <div className="main-container">
          <Home />
        </div>
      </section>
      <section className="scroller-section about-section">
        <div className="main-container">
          <About />
        </div>
      </section>
      <section className="scroller-section services-section">
        <div className="main-container">
          <Services />
        </div>
      </section>
      <section className="scroller-section pricing-section">
        <div className="main-container">
          <Pricing />
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export default App;

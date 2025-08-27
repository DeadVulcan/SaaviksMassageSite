import Services from "./components/Services";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Home />
        <Services />
        <About />
      </div>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export default App;

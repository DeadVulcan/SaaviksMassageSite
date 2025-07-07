import Services from './components/Services';
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
        <Home />
        <Services />
        <About />
      <Footer />
    </>
  );
}

export default App;

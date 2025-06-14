import Services from './components/Services';
import logo from "./logo.svg";
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
      <main>
        <Home />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

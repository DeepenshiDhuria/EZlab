import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";    
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PortfolioSection />
      <AboutUs />
      <Service />
       <Highlights />
      <Contact />
     
      <br />
      
    </div>
  );
}

export default App;

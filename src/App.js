import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortening from "./components/Shortening";
import AdvanceStates from "./components/AdvanceStates";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="w-[85%]  mx-auto bg-white">
        <Header />
        <Hero />
      </div>
      <div className="w-[85%]  mx-auto">
        <Shortening />
        <AdvanceStates />
      </div>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;

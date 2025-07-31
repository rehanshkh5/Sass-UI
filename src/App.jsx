import { useState } from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Patners from "./Components/Patners";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <div
        className="max-w-7xl
mx-auto px-2 py-10"
      >
        <MainSection />
        <Patners />
      </div>

      <div> 
        <HeroSection />
      </div>
    </>
  );
}

export default App;

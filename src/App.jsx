import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Patners from "./Components/Patners";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";

function App() {
  return (
    <>
      <div className="overscroll-contain overflow-x-hidden">
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
        <div className="  ">
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;

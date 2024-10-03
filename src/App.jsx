import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import useScrollDirection from "./hooks/useScrollDirection";
import BannerSection from "./sections/Banner";
import Liquidity from "./sections/Liquidity";
import Wealth from "./sections/Wealth";
import Calculations from "./sections/Calculations";


function App() {
  const showNavbar = useScrollDirection(10);

  return (
    <main className="min-h-screen flex flex-col  items-center pb-[500rem] bg-gray-100">
      <Navbar floating={true} show={showNavbar} />
      <Hero />
      <BannerSection />
      <Liquidity />
      <Wealth />
      <Calculations />
    </main>
  );
}

export default App;

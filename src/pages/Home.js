import React from "react";
import "../App.css";
import About from "../components/About/About";
import Skins from "../components/Skins/Skins";
import HeroSection from "../components/Hero/HeroSection";
import Footer from "../components/Footer/Footer";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import Roadmap from "../components/Roadmap/Roadmap";
import Airdrop from "../components/Airdrop/Airdrop";
import Audit from "../components/Audit/Audit";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skins />
      <Tokenomics />
      <Roadmap />
      <Airdrop />
      <Audit />
      <Footer />
    </>
  );
}

export default Home;

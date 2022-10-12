import React from "react";
import "../App.css";
import HeroSection from "../components/02_Hero/HeroSection";
import About from "../components/03_About/About";
import Skins from "../components/04_Skins/Skins";
import Tokenomics from "../components/05_Tokenomics/Tokenomics";
import Roadmap from "../components/06_Roadmap/Roadmap";
import Airdrop from "../components/07_Airdrop/Airdrop";
import Audit from "../components/08_Audit/Audit";
import Footer from "../components/09_Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skins />
      <Tokenomics />
      <Roadmap />
      {/* <Airdrop /> */}
      {/* <Audit /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;

import React from 'react';
import '../App.css';
import About from '../components/About/About';
import Skins from '../components/Skins/Skins';
import HeroSection from '../components/Hero/HeroSection';
import Footer from '../components/Footer/Footer';
import Tokenomics from '../components/Tokenomics/Tokenomics';
import Roadmap from '../components/Roadmap/Roadmap';


function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skins />
      <Tokenomics/>
      <Roadmap/>
      <Footer />
    </>
  );
}

export default Home;

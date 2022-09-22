import React from 'react';
import '../../App.css';
import About from '../About';
import Skins from '../Skins'
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Roadmap from '../Roadmap';


function Home() {
  return (
    <>
      <HeroSection />
    <section id="about">
      <About />
    </section>
      <About />
      <Skins />
      <Roadmap/>
      <Footer />
    </>
  );
}

export default Home;

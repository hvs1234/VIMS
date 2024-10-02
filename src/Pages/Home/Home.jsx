// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeChoose from "./HomeChoose";
import HomeProgram from "./HomeProgram";
import HomeScholar from "./HomeScholar";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeScholar />
      <HomeAbout />
      <HomeChoose />
      <HomeProgram />
      <Footer />
    </>
  );
};

export default Home;

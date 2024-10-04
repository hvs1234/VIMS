// import React from 'react'
import Nav from "../../Components/Navbar/Nav";
import AboutMain from "./AboutMain";
import Footer from "../../Components/Footer/Footer";
import AboutMission from "./AboutMission";
import AboutVision from "./AboutVision";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const About = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <Nav />
      <div
        className="relative w-[100%] h-[100%] object-cover bg-[url('/Images/About/2.jpg')] bg-no-repeat bg-center 
      bg-cover pt-[9rem] pb-[9rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.5]"></div>
        <div
          className="relative flex flex-col gap-[2rem] w-[100%] justify-end items-start mt-[20rem] max-md:mt-[10rem] max-w-[80%] 
        max-md:items-center max-md:justify-center max-md:max-w-[100%] max-md:text-center"
        >
          <h1 className="text-[5rem] text-[white] font-normal max-xl:text-[4rem] max-md:text-[3rem]">
            About VIMS
          </h1>
          <p className="text-[2.5rem] text-[#f2f2f2] font-light max-md:text-[2rem] text-justify max-md:text-center">
            <i className="fa-solid fa-quote-left text-[3rem] opacity-[0.5]"></i>
            &nbsp; VIMS Dehradun was established in 2024 with the mission of
            delivering high-quality Since then the Institute is aimed on
            imparting quality hospitality education that evolves with industry
            trends, ensuring student receive current and relevant experience and
            knowledge &nbsp;
            <i className="fa-solid fa-quote-right text-[3rem] opacity-[0.5]"></i>
          </p>
          <div className="mt-[1rem]">
            <Link
              to={`/academics`}
              onClick={handleOnClick(`/academics`)}
              className="bg-[darkgreen] text-[white] px-[2rem] py-[0.5rem] text-[2rem] rounded-xl transition-all
              duration-[0.1s] ease-linear hover:opacity-[0.8]"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </div>

      <AboutMain />
      <AboutMission />
      <AboutVision />

      <Footer />
    </>
  );
};

export default About;

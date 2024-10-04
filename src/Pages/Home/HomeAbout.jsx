// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import home_about_img from "/Images/5.jpg";

const HomeAbout = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            About VIMS
          </h2>
        </div>
        <div className="grid grid-cols-2 w-[100%] justify-center max-xl:grid-cols-1">
          <div
            className="relative flex flex-col justify-center gap-[2rem] py-[8rem] px-[8rem] bg-[url('/Images/Academics/4.jpg')] bg-no-repeat bg-center bg-cover max-2xl:px-[4rem] max-2xl:py-[4rem] max-md:px-[2rem]"
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#f2f2f2] opacity-[0.7]"></div>
            <div className="flex flex-col gap-[2rem] relative">
              <h2 className="text-[4rem] text-[#ae2222] font-normal max-xl:text-[3rem] max-sm:text-[2.5rem]">
                Shaping Future Leaders
              </h2>
              <div className="w-[100%] h-[1px] my-0 bg-[#212121]"></div>
              <p className="text-[2rem] font-medium text-[#313131] text-justify max-sm:text-left max-sm:text-[1.6rem]">
                VIMS Dehradun was established in 2024 with the mission of
                delivering high-quality Since then the Institute is aimed on
                imparting quality hospitality education that evolves with
                industry trends, ensuring student receive current and relevant
                experience and knowledge.{" "}
              </p>
              <p className="text-[2rem] font-medium text-[#313131] text-justify max-sm:text-left max-sm:text-[1.6rem]">
                Our institute VIMS is approved by the highly ranked Sridev Suman
                Uttarakhand University. At VIMS, we are committed to providing
                exceptional education, training, career assistance to ambitious
                students. We prioritise offering comprehensive exposure and
                hands-on training to prepare our graduates for success in the
                hospitality industry, resulting in excellent placement outcomes
                through our strong industry collaborations.
              </p>
              <div className="mt-[1rem]">
                <Link
                  to={"/about"}
                  onClick={handleOnClick("/about")}
                  className="bg-[darkgreen] text-[white] px-[2rem] py-[0.5rem] text-[2rem] rounded-xl transition-all duration-[0.1s] ease-linear hover:opacity-[0.8]"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <img src={home_about_img} alt="img" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

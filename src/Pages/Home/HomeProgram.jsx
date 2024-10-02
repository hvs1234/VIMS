// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import home_about_img from "/Images/2.jpg";
import { GrCertificate } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";

const HomeProgram = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            Our Program
          </h2>
        </div>
        <div className="grid grid-cols-2 w-[100%] justify-center max-xl:grid-cols-1">
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <img src={home_about_img} alt="img" className="w-[100%] h-[100%]" />
          </div>
          <div className="flex flex-col justify-center gap-[2rem] py-[8rem] px-[8rem] bg-[#f2f2f2] max-2xl:px-[4rem] max-2xl:py-[4rem] max-md:px-[2rem]">
            <h2 className="text-[4rem] text-[#ae2222] font-normal max-xl:text-[3rem] max-sm:text-[2.5rem]">
              Career Programs
            </h2>
            <div className="w-[100%] h-[1px] my-0 bg-[#212121]"></div>
            <p className="text-[2rem] font-normal text-justify max-sm:text-left max-sm:text-[1.6rem]">
              Welcome to our One-Year Diploma in Hotel Management. This program
              meticulously crafted for individuals aspiring to immerse
              themselves in the dynamic field of hospitality. Over the course of
              one year, you will acquire an extensive understanding of hotel
              operations, encompassing front office management, housekeeping,
              and food and beverage service.
            </p>
            <div className="flex flex-col gap-[1rem] py-[2rem] max-sm:py-0">
              <div className="flex items-center gap-[1rem]">
                <GrCertificate
                  size={40}
                  className="text-[#212121] max-sm:size-10"
                />
                <h2 className="text-[3rem] font-normal text-[#212121] max-sm:text-[2.5rem]">
                  Diploma Program
                </h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <FaDotCircle
                  size={20}
                  className="text-[#212121] max-sm:size-5"
                />
                <h2 className="text-[2.5rem] font-normal text-[#212121] max-sm:text-[2rem]">
                  Hotel Management
                </h2>
              </div>
            </div>
            <div className="mt-[1rem]">
              <Link
                to={"/"}
                onClick={handleOnClick("/")}
                className="bg-[darkgreen] text-[white] px-[2rem] py-[0.5rem] text-[2rem] rounded-xl transition-all duration-[0.1s] ease-linear hover:opacity-[0.8]"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProgram;

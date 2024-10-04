// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const Footer = () => {
  const {
    footerhelpfullinks,
    footerlatestprogramlinks,
    footerproductlinks,
    footersupportlinks,
    footerlegallinks,
    handleOnClick,
  } = Handlers();

  return (
    <>
      <div className="bg-[#212121] pt-[9rem] pb-[2rem] px-[2rem] ml-auto mr-auto w-[100%] max-md:pt-[6rem]">
        <div className="w-[100%] flex flex-wrap gap-[12rem] justify-center items-start max-xl:justify-start max-md:flex-col max-md:items-center max-md:gap-[5rem]">
          <div className="flex justify-center flex-col gap-[4rem] max-md:items-center max-md:text-center">
            <h3 className="text-[2.5rem] font-normal text-[white] max-md:text-[2rem]">
              Helpful Links
            </h3>
            <div className="flex flex-col gap-[2rem]">
              {footerhelpfullinks.map((e) => {
                return (
                  <ul key={e.id} className="flex flex-col">
                    <Link
                      to={e.to}
                      onClick={handleOnClick(e.to)}
                      className="text-[white] text-[2rem] font-normal hover:scale-[1.05] max-md:text-[1.6rem] transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
                    >
                      {e.name}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center flex-col gap-[4rem] max-md:items-center max-md:text-center">
            <h3 className="text-[2.5rem] max-md:text-[2rem] font-normal text-[white]">
              Latest Program
            </h3>
            <div className="flex flex-col gap-[2rem]">
              {footerlatestprogramlinks.map((e) => {
                return (
                  <ul key={e.id} className="flex flex-col">
                    <Link
                      to={e.to}
                      onClick={handleOnClick(e.to)}
                      className="text-[white] text-[2rem] max-md:text-[1.6rem] font-normal hover:scale-[1.05] transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
                    >
                      {e.name}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center flex-col gap-[4rem] max-md:items-center max-md:text-center">
            <h3 className="text-[2.5rem] max-md:text-[2rem] font-normal text-[white]">
              Products
            </h3>
            <div className="flex flex-col gap-[2rem]">
              {footerproductlinks.map((e) => {
                return (
                  <ul key={e.id} className="flex flex-col">
                    <Link
                      to={e.to}
                      onClick={handleOnClick(e.to)}
                      className="text-[white] text-[2rem] max-md:text-[1.6rem] font-normal hover:scale-[1.05] transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
                    >
                      {e.name}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center flex-col gap-[4rem] max-md:items-center max-md:text-center">
            <h3 className="text-[2.5rem] max-md:text-[2rem] font-normal text-[white]">
              Support
            </h3>
            <div className="flex flex-col gap-[2rem]">
              {footersupportlinks.map((e) => {
                return (
                  <ul key={e.id} className="flex flex-col">
                    <Link
                      to={e.to}
                      onClick={handleOnClick(e.to)}
                      className="text-[white] text-[2rem] max-md:text-[1.6rem] font-normal hover:scale-[1.05] transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
                    >
                      {e.name}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center flex-col gap-[4rem] max-md:items-center max-md:text-center">
            <h3 className="text-[2.5rem] max-md:text-[2rem] font-normal text-[white]">
              Legal
            </h3>
            <div className="flex flex-col gap-[2rem]">
              {footerlegallinks.map((e) => {
                return (
                  <ul key={e.id} className="flex flex-col">
                    <Link
                      to={e.to}
                      onClick={handleOnClick(e.to)}
                      className="text-[white] text-[2rem] max-md:text-[1.6rem] font-normal hover:scale-[1.05] transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
                    >
                      {e.name}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="w-[100%] h-[1px] bg-[#f2f2f2] my-[0rem] mt-[-5rem] max-md:my-[2rem]"></div>
        </div>
        <div className="flex flex-col gap-[1rem] text-center justify-center items-center">
          <p className="text-[2rem] text-[white] font-normal max-md:text-[1.6rem]">
            &copy; Copyright VIMS 2024. | All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

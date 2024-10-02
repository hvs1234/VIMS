// import React from 'react'

import Nav from "../../Components/Navbar/Nav";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Handlers from "../../Services/Handlers";

const Hero = () => {
  const { swiperdata } = Handlers();

  return (
    <>
      <Nav />
      <div className="relative object-cover w-[100%] h-[100vh] bg-center bg-cover mt-[0]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.4]"></div>
        <div className="relative w-[100%] h-[100%] flex justify-center items-center object-cover">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="mySwiper w-[100%] h-[100%] object-cover relative"
          >
            {swiperdata.map((e) => {
              return (
                <SwiperSlide
                  className="text-[white] flex justify-center items-center h-[100%] object-cover"
                  key={e.id}
                >
                  <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.4]"></div>
                  <img
                    src={e.img}
                    alt="img"
                    className="w-[100%] h-[100%] flex justify-center object-cover"
                  />
                  <div className="absolute flex flex-col gap-[1rem] justify-center items-center px-[20%] text-center h-[100%] max-2xl:px-[15%] max-xl:px-[10%] max-lg:px-[5%] max-sm:px-[1rem]">
                    <h1 className={`text-[5rem] font-medium max-xl:text-[4rem] max-md:text-[3rem] text-white`}>
                      {e.title}
                    </h1>
                    <h2 className={`text-[4rem] font-normal max-xl:text-[3rem] max-md:text-[2rem] text-[#f2f2f2]`}>
                      {e.name}
                    </h2>
                    <p className={`text-[2rem] px-[20rem] font-normal max-xl:px-[4rem] max-sm:px-[1rem] max-sm:text-[1.6rem] text-[#f2f2f2]`}>
                      {e.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;

// import React from 'react'
import missionimg from "/Images/About/4.jpg";

const AboutMission = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] w-[100%] px-[0rem] pt-[0rem] mt-0 max-md:pt-0">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            Our Mission
          </h2>
        </div>
        <div className="grid grid-cols-2 w-[100%] max-xl:grid-cols-1">
          <div className="flex flex-col justify-center gap-[2rem] px-[8rem] py-[8rem] w-[100%] bg-[#f2f2f2] max-xl:px-[5rem] max-xl:py-[5rem] max-md:px-[2rem] max-md:py-[5rem]">
            <h2 className="text-[4rem] text-[#212121] font-normal max-md:text-[3rem] max-sm:text-[2.5rem]">
              Inspiring Future Growth
            </h2>
            <div className="w-[100%] h-[1px] bg-[#212121]"></div>
            <p className="text-[2rem] text-[#212121] font-normal max-md:text-[1.6rem]">
              Our mission is to be a student centric, forward-thinking institute
              with a global perspective. We are committed to delivering
              contemporary education that emphasizes problem solving skills,
              cooperation, mutual respect, a sense of responsibility and
              collaborative learning. We aim to make the learning process both
              challenging and rewarding, ensuring it is an engaging and
              enjoyable experience. Our goal is to cultivate future leaders who
              appreciate the value of humility. We provide a conducive
              environment that supports learning, critical thinking, and
              enjoyment, while striving for excellence in all aspects by
              maintaining the highest standards.
            </p>
            <p className="text-[2rem] text-[#212121] font-normal max-md:text-[1.6rem]">
              To realize our vision, Vims is committed to creating an
              environment where every student can uncover and achieve their full
              potential. We aim to attract exceptional talent, including
              students, educators and facilitators, from across India and around
              the world.
            </p>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <img src={missionimg} alt="img" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMission;

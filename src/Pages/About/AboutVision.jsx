// import React from 'react'
import missionimg from "/Images/About/5.jpg";

const AboutVision = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] w-[100%] px-[0rem] max-xl:pt-0">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            Our Vision
          </h2>
        </div>
        <div className="grid grid-cols-2 w-[100%] max-xl:grid-cols-1">
          <div className="flex justify-center items-center w-[100%] h-[100%] max-xl:order-2">
            <img src={missionimg} alt="img" className="w-[100%] h-[100%]" />
          </div>
          <div className="relative flex flex-col justify-center gap-[2rem] w-[100%] px-[8rem] py-[8rem] max-xl:px-[5rem] max-xl:py-[5rem] max-md:px-[2rem] max-md:py-[5rem] bg-[url('/Images/Academics/4.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#f2f2f2] opacity-[0.7]"></div>
            <div className="flex flex-col gap-[2rem] relative">
              <h2 className="text-[4rem] text-[darkred] font-normal max-md:text-[3rem] max-sm:text-[2.5rem]">
                A Future of Innovation
              </h2>
              <div className="w-[100%] h-[1px] bg-[#212121]"></div>
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                Our goal is to be one of the most esteemed centre of world-class
                education, dedicated to fostering academic excellence, physical
                fitness, psychological and spiritual well-being and social
                consciousness. We are committed to preparing students to excel
                in the 21st century as independent thinkers who embody
                initiative and leadership qualities, equipping them to becomes
                global citizens. We encourage the development of strong ethical
                values and expose students to a modern, technology-driven
                environment thereby reinforcing our rich heritage and enhancing
                human potential for the betterment of society.
              </p>
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                Vims envisions empowering students with relevant knowledge and
                developing their competence to become professionals in the
                Hospitality Industry. Our goal is to instill a professional
                vigor that inspires students to realize their potential for
                employment or self-employment in specialized fields such as
                Applied Nutrition, Sports Nutrition, Hotel Interiors, Interior
                and Exterior Design, Furniture and Furnishing Design, and other
                related professions within the hospitality sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;

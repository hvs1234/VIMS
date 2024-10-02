// import React from 'react'
import img from "/Images/6.jpg";

const HomeScholar = () => {
  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] h-[100%] relative object-cover bg-[#ffe1e5] ml-auto mr-auto max-2xl:px-[10rem] max-xl:px-[5rem] max-md:px-[2rem] max-lg:py-[6rem]">
        <div className="grid grid-cols-2 justify-center items-center gap-[8rem] w-[100%] max-lg:gap-[4rem] max-lg:grid-cols-1">
          <div className="flex justify-center items-center w-[100%] max-lg:order-2">
            <img src={img} alt="img" className="w-[100%] rounded-md" />
          </div>
          <div className="flex flex-col justify-center gap-[2rem] w-[100%]">
            <div className="flex flex-col gap-[1rem]">
              <h2 className="text-[4rem] max-2xl:text-[3rem] max-sm:text-[2.5rem] max-[400px]:text-[2rem] text-[red] font-normal">
                3 CRORES SCHOLARSHIPS
              </h2>
              <p className="text-[2.5rem] max-2xl:text-[2rem] max-sm:text-[1.6rem] font-normal text-[#212121]">FOR ASPIRING STUDENTS</p>
            </div>
            <div className="w-[100%] h-[0.1px] bg-[#212121] my-[2rem] max-xl:my-0"></div>
            <div className="flex flex-col gap-[1rem]">
              <h2 className="text-[4rem] max-2xl:text-[3rem] max-sm:text-[2.5rem] max-[400px]:text-[2rem] text-[red] font-normal">
                UPTO 100% SCHOLARSHIP
              </h2>
              <p className="text-[2.5rem] max-2xl:text-[2rem] max-sm:text-[1.6rem] font-normal text-[#212121]">FOR THE MERITORIOUS STUDENTS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScholar;

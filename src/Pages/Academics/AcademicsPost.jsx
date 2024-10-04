// import React from 'react'
import { useState } from "react";
import { AcademicPostData } from "../../APIs/AcademicPostAPI";

const AcademicsPost = () => {
  const [academicpostdata] = useState(AcademicPostData);

  return (
    <>
      <div className="relative object-cover w-[100%] py-[0] px-[0]">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            Master the Art of Hotel Management
          </h2>
        </div>
        {academicpostdata.map((e) => {
          return (
            <div
              className="grid grid-cols-2 w-[100%] justify-center max-xl:grid-cols-1"
              key={e.id}
            >
              <div
                className={`px-[4rem] py-[4rem] bg-[#3e3e8e] max-md:px-[2rem] max-md:py-[2rem] ${e.boxclass}`}
              >
                <div
                  className={`flex flex-col justify-center 
                  h-[100%] items-start gap-[2rem] px-[4rem] py-[4rem] ${e.innerclass} max-md:px-[2rem] max-md:py-[2rem]`}
                >
                  <e.icon size={60} className="text-[white] max-sm:size-20" />
                  <h2 className="text-[white] font-normal text-[3rem] max-sm:text-[2rem]">
                    {e.title}
                  </h2>
                  <p className="text-[2.2rem] text-[white] max-sm:text-[1.8rem] capitalize">
                    {e.desc}
                  </p>
                  <div className="flex flex-col gap-[2rem] items-start">
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc1}
                    </p>
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc2}
                    </p>
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc3}
                    </p>
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc4}
                    </p>
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc5}
                    </p>
                    <p className="text-[2rem] font-light text-[white] max-sm:text-[1.6rem]">
                      <i className="fa-solid fa-check"></i>&nbsp; {e.subDesc6}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-[100%] relative bg-[url('/Images/Academics/4.jpg')] bg-no-repeat bg-center bg-cover bg-fixed flex justify-center 
                items-center h-[100%] ${e.imgclass} px-[4rem] py-[4rem] max-md:px-[2rem] max-md:py-[2rem]`}
              >
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#ff1b1b] opacity-[0.2]"></div>
                <img
                  src={e.img}
                  alt="img"
                  className="w-[100%] h-[100%] relative rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AcademicsPost;

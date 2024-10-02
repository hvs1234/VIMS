// import React from 'react'
import Handlers from "../../Services/Handlers";

const HomeChoose = () => {
  const { homechoosedata } = Handlers();

  return (
    <>
      <div className="flex justify-center items-center text-center px-[2rem] py-[1rem] bg-[darkred] text-[white] text-[4rem] max-xl:text-[3rem] max-md:px-[1rem] max-sm:text-[2rem]">
        Best Institute Of Hotel Management In Uttarakhand
      </div>
      <div className="flex justify-center items-center text-center px-[2rem] py-[1rem] bg-[#30306f] text-[white] text-[4rem] max-xl:text-[3rem] max-md:px-[1rem] max-sm:text-[2rem]">
        Why choose us?
      </div>
      <div className="py-[4rem] px-[4rem] w-[100%] bg-[#3e3e8e] grid grid-cols-4 gap-[4rem] justify-center max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-[2rem]">
        {homechoosedata.map((e) => {
          return (
            <div
              key={e.id}
              className={`border-r-[1px] border-b-[1px] border-[white] flex flex-col justify-center items-center text-center gap-[1rem] px-[2rem] py-[2rem] ${e.boxclass}`}
            >
              <e.icon size={60} className="text-[white] max-sm:size-20" />
              <h2 className="text-[white] font-normal text-[3rem] max-sm:text-[2rem]">
                {e.title}
              </h2>
              <p className="text-[2rem] text-[white] max-sm:text-[1.6rem]">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeChoose;

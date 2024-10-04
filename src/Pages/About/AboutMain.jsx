// import React from 'react'

const AboutMain = () => {
  return (
    <>
      <div className="relative w-[100%]">
        <div className="flex items-center justify-center text-center w-[100%] bg-[darkred] px-[2rem] py-[1rem]">
          <h2 className="text-[4rem] font-normal text-[white] max-xl:text-[3rem] max-sm:text-[2.5rem]">
            Let Us Tell You Our Story
          </h2>
        </div>
        <div
          className="pt-[6rem] pb-[6rem] px-[20rem] w-[100%] relative object-cover bg-[url('/Images/Academics/1.jpg')] bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[4rem]"
          id="aboutmain"
        >
          <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#f2f2f2] opacity-[0.7]"></div>
          <div className="relative w-[100%]">
            <div className="flex flex-col gap-[2rem]">
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                Our institute VIMS is approved by the highly ranked Sridev Suman
                Uttarakhand University.
              </p>
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                At VIMS, we are committed to providing exceptional education,
                training, career assistance to ambitious students. We prioritise
                offering comprehensive exposure and hands-on training to prepare
                our graduates for success in the hospitality industry, resulting
                in excellent placement outcomes through our strong industry
                collaborations.
              </p>
            </div>
            <div className="w-[100%] h-[50vh] relative bg-[url('/Images/About/3.jpg')] bg-no-repeat bg-center bg-cover ml-auto mr-auto max-w-[100%] mt-[4rem] rounded-md max-md:mt-[4rem]">
              <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0]"></div>
            </div>
            <div className="flex flex-col gap-[2rem] mt-[4rem]">
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                Our philosophy is to deliver education that aligns with industry
                requirements and skills. We emphasize the importance of
                understanding and adapting to industry demands in addition to
                the standard course content. We encourage students to stay
                informed about evolving trends across various sectors to ensure
                they are confident at the outset of their careers.
              </p>
              <p className="text-[2rem] text-[#313131] font-medium max-md:text-[1.6rem]">
                By focusing on real-world applications and emerging trends in
                hospitality, our Hotel Management program builds professionals
                who are not only adept in operational excellence but also in
                leadership and innovation. Graduates emerge as dynamic,
                industry-ready individuals prepared to excel in a global market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;

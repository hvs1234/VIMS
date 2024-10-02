import { useState } from "react";
import Handlers from "../../Services/Handlers";

const AcademicsDetail = () => {
  const { academicsdetaildata } = Handlers();
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const openPopup = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % academicsdetaildata.length);
  };

  const showPrevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + academicsdetaildata.length) % academicsdetaildata.length
    );
  };

  const toggleShowMore = () => {
    if (showMore) {
      setVisibleImages((prev) =>
        prev + 4 > academicsdetaildata.length
          ? academicsdetaildata.length
          : prev + 4
      );
      if (visibleImages + 4 >= academicsdetaildata.length) {
        setShowMore(false);
      }
    } else {
      setVisibleImages(4);
      setShowMore(true);
    }
  };

  return (
    <>
      <div className="relative pt-[9rem] pb-[4rem] px-[2rem] w-[100%] bg-[url('/Images/3.jpg')] bg-no-repeat bg-center bg-cover bg-fixed h-[100%] max-md:py-[2rem]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.5]"></div>
        <div className="grid grid-cols-4 gap-[1rem] w-[100%] ml-auto mr-auto relative max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {academicsdetaildata.slice(0, visibleImages).map((e, index) => {
            return (
              <div
                key={e.id}
                className={`overflow-hidden px-[1rem] py-[1rem] bg-[white] rounded-md flex justify-center items-center ${e.imgclass}`}
                onClick={() => openPopup(index)}
              >
                <img
                  src={e.img}
                  alt="img"
                  className="w-[100%] h-[100%] rounded-md transition-all duration-[0.4s] overflow-hidden cursor-pointer ease-linear hover:scale-[1.3]"
                />
              </div>
            );
          })}
        </div>

        {isOpen && (
          <div className="fixed inset-0 top-[0rem] bg-[#636363] flex justify-center items-center z-50 w-[100%]">
            <button
              className="absolute top-[10rem] right-[2rem] text-white z-[1001] text-[4rem]"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="relative flex justify-center items-center w-[100%] h-[auto] py-[10rem]">
              <img
                src={academicsdetaildata[currentImage].img}
                alt="img"
                className="w-[80%] h-[100%]"
              />
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-[4rem] px-4"
                onClick={showPrevImage}
              >
                &#10094;
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-[4rem] px-4"
                onClick={showNextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center text-center relative mt-[4rem] w-[100%]">
          <button
            className="bg-[darkgreen] text-[white] px-[2rem] py-[0.5rem] text-[2rem] rounded-xl transition-all
              duration-[0.1s] ease-linear hover:opacity-[0.8] w-[20%] max-lg:w-[30%] max-sm:w-[auto]"
            onClick={toggleShowMore}
          >
            {showMore ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AcademicsDetail;

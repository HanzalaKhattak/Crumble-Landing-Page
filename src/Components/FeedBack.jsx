import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const feedbackData = [
  {
    name: "Zara A., Islamabad",
    message:
      "Bas ek cookie khaai thi… and now I can’t stop. The packaging, the taste, the vibe — sab kuch 10/10.",
  },
  {
    name: "Ali R., Lahore",
    message:
      "Mouthwatering cookies delivered warm and fresh. Crumble is my new addiction!",
  },
  {
    name: "Sarah K., Karachi",
    message:
      "Every bite reminded me of childhood treats. Perfect softness, perfect sweetness.",
  },
  {
    name: "Sir Shahzad",
    message: "The cookies are absolutely delicious and Mouth-Watering."
  },
  {
    name: "Atif Afridi",
    message: "Ayeee Hayeee Hayee. Cookie Muu che gholl gya yarrr. chass kraaa ti"
  }
];

const FeedBack = () => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((prev) => (prev === 0 ? feedbackData.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setIndex((prev) => (prev === feedbackData.length - 1 ? 0 : prev + 1));
  };

  const current = feedbackData[index];

  return (
    <div className="bg-[#FFF4E4] py-16 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-[#050897] text-3xl sm:text-4xl font-bold mb-12">Happy Customers</h2>

      <div className="relative max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl w-full">
        {/* Feedback Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-2 border-[#1E2CFF] rounded-full px-6 sm:px-8 md:px-10 py-10 w-full bg-white shadow-md transition-all duration-500 ease-in-out">
          {/* User Icon */}
          <div className="text-[#1E2CFF] text-[100px] sm:text-[130px] md:text-[150px]">
            <FaUserCircle />
          </div>

          {/* Feedback Content */}
          <div className="text-left px-2 sm:px-0">
            <p className="text-black font-semibold text-base sm:text-lg">{current.name}</p>
            <p className="italic text-black text-sm sm:text-[16px] md:text-[17px] mt-1 leading-relaxed">
              {current.message}
            </p>

            {/* Dots */}
            <div className="flex justify-center mt-10 space-x-2">
              {feedbackData.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full inline-block ${
                    i === index ? 'bg-[#1E2CFF]' : 'bg-white'
                  } border border-gray-300`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={handleLeft}
          className="absolute -left-3 sm:-left-8 md:-left-10 top-1/2 transform -translate-y-1/2 bg-[#1E2CFF] text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-[#050897] transition"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={handleRight}
          className="absolute -right-3 sm:-right-8 md:-right-10 top-1/2 transform -translate-y-1/2 bg-[#1E2CFF] text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-[#050897] transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeedBack;

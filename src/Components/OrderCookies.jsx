import React, { useState, useEffect } from 'react';
import OrderCookiesBG from "../assets/OrderCookiesBG.png";
import LeftButton from "../assets/Leftbutton.png";
import RightButton from "../assets/RightButton.png";
import ClassicChocoShip from "../assets/ClassicChocoShip.png";
import DoubleChocolate from "../assets/DoubleChocolate.png";
import WalnutChocolateChip from "../assets/WalnutChocolateChip.png";

const OrderCookies = () => {
  const [cardOrder, setCardOrder] = useState([
    {
      img: ClassicChocoShip,
      title: 'Classic Chocolate Chip',
      rating: '4.9',
    },
    {
      img: DoubleChocolate,
      title: 'Double Chocolate Chip',
      rating: '4.9',
    },
    {
      img: WalnutChocolateChip,
      title: 'Walnut Chocolate Chip',
      rating: '4.9',
    },
  ]);

  const [direction, setDirection] = useState("");

  const handleNext = () => {
    setDirection("left");
    setCardOrder((prev) => {
      const shifted = [...prev];
      const first = shifted.shift();
      shifted.push(first);
      return shifted;
    });
  };

  const handlePrev = () => {
    setDirection("right");
    setCardOrder((prev) => {
      const shifted = [...prev];
      const last = shifted.pop();
      shifted.unshift(last);
      return shifted;
    });
  };

  // Reset direction after animation
  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(""), 500);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  return (
    <>
    <div className='h-140 w-full flex justify-center items-center overflow-hidden relative'>
      {/* Left Button */}
      <button
          onClick={handlePrev}
          className='w-8 h-8 bg-[#050897] rounded-full flex justify-center items-center z-10 md:w-14 md:h-14 md:absolute md:left-5 md:mt-13
             lg:w-22 lg:h-22 lg:absolute lg:left-33 lg:mt-13 mt-4 mr-2'>
          <img src={LeftButton} alt="LeftButton" className='w-4 h-4 lg:w-auto lg:h-auto' />
      </button>


      {/* Background */}
      <div className='relative z-0 pt-14 w-full h-200 md:w-100   lg:w-[920px] lg:h-120 lg:bg-white'>
  {/* Image visible only on large screens and up */}
  <img
    src={OrderCookiesBG}
    alt="OrderCookiesBG"
    className='hidden lg:block w-full h-full object-contain'
  />
</div>




      {/* Card Container with animation */}
     <div
  className={`absolute flex justify-between gap-10 lg:gap-10 md:gap-2 transition-transform duration-500 ease-in-out ${
    direction === "right" ? "translate-x-4" : direction === "left" ? "-translate-x-4" : ""
  }`}
>
  {cardOrder.map((card, index) => {
    // Determine if the card should be shown based on screen size and index
    const isMobile = index === 1;
    const isTablet = index >= 0 && index <= 2; // Show all three cards
    const isLarge = true; // Show all cards

    return (
      <div
        key={index}
        className={`
          bg-white rounded-3xl px-6 pt-16 top-[40px] pb-6 relative shadow-2xl w-55 h-50
          transform transition-all duration-500 ease-in-out
          ${index === 1 ? 'scale-110 z-10 translate-y-0' : 'scale-95 opacity-80 translate-y-2'}
          ${!isMobile ? 'hidden' : ''}                  // Mobile: Only center card
          ${isTablet ? 'md:inline-block' : 'md:hidden'} // Tablet: Show first 3
          ${isLarge ? 'lg:inline-block' : ''}           // Large: Show all
        `}
      >
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <img src={card.img} alt={card.title} className="w-35 object-cover rounded-full" />
        </div>
        <h3 className="text-[#050897] text-[16px]">{card.title}</h3>
        <p className="text-[#050897] text-2xl font-semibold mt-2">Rs. 1,950</p>
        <div className="flex items-center justify-between">
          <button className="mt-4 bg-[#050897] text-white text-sm px-4 py-2 rounded-full">
            order now
          </button>
          <p className="mt-3 text-[#050897]">★ {card.rating}</p>
        </div>
      </div>
    );
  })}
</div>


      {/* Right Button */}
      <button
          onClick={handleNext}
          className='w-8 h-8 bg-[#050897]  rounded-full flex justify-center items-center z-10 sm:w-20 sm:h-20 sm:right-30 sm:mt-13 md:w-14 md:h-14 md:absolute md:right-5
             lg:w-22 lg:h-22 lg:absolute lg:right-33  lg:mt-13 
             mt-4 ml-2'>
          <img src={RightButton} alt="RightButton" className='w-4 h-4 lg:w-auto lg:h-auto' />
      </button>
    </div>
    
    </>
  );
};

export default OrderCookies;
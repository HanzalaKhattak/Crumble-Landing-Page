import React from 'react'
import heroImage from "../assets/heroImage.png"
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[427px] bg-cover bg-center flex flex-col text-center justify-center items-center px-4 sm:px-8 md:px-12 gap-6 sm:gap-10 md:gap-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='px-2 sm:px-6 md:px-8'>
          <h1 className='text-[#050897] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-snug'>
            Cookies Itni Soft, Toot Jaye Dill!
          </h1>

          <p className='text-[#050897BA] text-sm sm:text-base md:text-lg lg:text-[24px] mt-2 sm:mt-4'>
            Freshly baked har roz, with love aur asli ingredients — every cookie is soft, chunky, and full of <br className='hidden sm:block' /> flavor. Straight from our oven to your doorstep, ready to win hearts one bite at a time.
          </p>
        </div>

        <button className='w-32 sm:w-40 md:w-[180px] lg:w-[221px] h-10 sm:h-12 md:h-[58px] lg:h-[67px] bg-[#050897] text-base sm:text-xl md:text-2xl lg:text-[32px] font-medium text-[#FFFFFF] rounded-3xl'>
          <Link to="/orders">Order Now</Link>
        </button>
      </div>
    </>
  )
}

export default HeroSection

import React from 'react'
import CookieSlider from './CookieSlider'
// import kahaani1 from "../assets/kahaani1.png"
// import kahaani2 from "../assets/kahaani2.png"
// import kahaani3 from "../assets/kahaani3.png"
// import kahaani4 from "../assets/kahaani4.png"
// import kahaani5 from "../assets/kahaani5.png"

const Kahaani = () => {
  return (
    <>
      <div className='bg-[#050897]'>
        <div className='flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>
          <h1 className='text-[32px] sm:text-10 md:text-12 font-semibold text-[#FFFFFF] py-6 sm:py-8 md:py-10'>
            Kahaani Crumble Ki
          </h1>
          <p className='w-full max-w-[1005px] text-[16px] sm:text-[20px] md:text-[24px] text-[#FFFFFF] leading-snug sm:leading-normal px-2 sm:px-4 text-center md:text-left'>
            Who would’ve thought that a simple craving from a university dorm room would turn into 
            Pakistan’s most loved cookie brand? <br />
            It all started in the hostel rooms of GIKI Islamabad, where a shared love for baking turned into something bigger.
            What began as a small countertop stall inside campus soon became the talk of the town — or at least the campus!
            Students, teachers, and staff all fell in love with our soft, gooey cookies. <br />
            Back then, Crumble wasn’t a business — it was a homegrown dream. Amma ka oven, doston ka 
            support, aur har cookie mein thoda pyaar zyada. We baked day and night, making each batch 
            with heart (and chocolate chips, of course). <br />
            As demand grew, so did our ambition. We took a leap of faith and opened our first official outlet in Chaklala Scheme 3, Rawalpindi.
            That’s where Crumble truly came to life. <br />
            Today, Crumble Pakistan delivers joy, warmth, and melt-in-your-mouth cookies across the 
            nation. From a humble hostel to homes all over Pakistan — this is just the beginning of our story.
          </p>
        </div>

        {/* <div className="relative w-full h-[500px] bg-[#050897] flex justify-center mt-10 px-2 sm:px-4 md:px-8">
          <div className="relative w-full max-w-[1200px] h-full">

            <img
              src={kahaani1}
              className="absolute left-0 top-28 w-[100px] sm:w-[180px] md:w-[260px] h-[150px] sm:h-[230px] md:h-[301px]"
              alt="img1"
            />

            <img
              src={kahaani2}
              className="absolute left-[10%] sm:left-[14%] md:left-[18%] top-20 w-[140px] sm:w-[220px] md:w-[325px] h-[180px] sm:h-[270px] md:h-[351px]"
              alt="img2"
            />

            <img
              src={kahaani3}
              className="absolute left-1/2 -translate-x-1/2 top-6 mt-6 z-10 w-[160px] sm:w-[260px] md:w-[359px] h-[200px] sm:h-[310px] md:h-[410px]"
              alt="img3"
            />

            <img
              src={kahaani4}
              className="absolute right-[10%] sm:right-[14%] md:right-[18%] top-20 w-[140px] sm:w-[220px] md:w-[325px] h-[180px] sm:h-[270px] md:h-[351px]"
              alt="img4"
            />

            <img
              src={kahaani5}
              className="absolute right-0 top-28 w-[100px] sm:w-[180px] md:w-[260px] h-[150px] sm:h-[230px] md:h-[301px]"
              alt="img5"
            />
          </div>
        </div> */}

      </div>
        <CookieSlider/>
    </>
  )
}

export default Kahaani

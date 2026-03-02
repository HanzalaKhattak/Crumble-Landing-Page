import React, { useState } from 'react'
import kahaani1 from '../assets/kahaani1.png'
import kahaani2 from '../assets/kahaani2.png'
import kahaani3 from '../assets/kahaani3.png'
import kahaani4 from '../assets/kahaani4.png'
import kahaani5 from '../assets/kahaani5.png'

const CookieSlider = () => {
  const [images, setImages] = useState([
    kahaani1,
    kahaani2,
    kahaani3,
    kahaani4,
    kahaani5
    
  ])

  const handleLeftClick = () => {
    // Move last image to the front
    const newImages = [images[images.length - 1], ...images.slice(0, images.length - 1)]
    setImages(newImages)
  }

  const handleRightClick = () => {
    // Move first image to the end
    const newImages = [...images.slice(1), images[0]]
    setImages(newImages)
  }

  return (
    <div className="flex flex-col items-center gap-10 bg-[#050897] pt-20 pb-10">
      <div className="flex justify-center items-center gap-4 transition-all duration-300 relative">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`kahaani${index + 1}`}
      className={`
        md:w-88 md:h-97 object-cover rounded-xl shadow-lg transition-all duration-300 w-72 h-82

        ${index === 2 ? 'inline-block scale-110 z-10 relative' : ''}

        ${index === 1 ? 'hidden md:inline-block md:absolute md:-left-30 lg:absolute lg:left-60 scale-100 z-5' : ''}
        ${index === 3 ? 'hidden md:inline-block md:absolute md:-right-30 lg:absolute lg:right-60 scale-100 z-5' : ''}

        ${index === 0 ? 'hidden lg:inline-block lg:absolute lg:left-100 scale-90' : ''}
        ${index === 4 ? 'hidden lg:inline-block lg:absolute lg:right-100 scale-90' : ''}
      `}
    />
  ))}
</div>  
      <div className="flex pt-10 gap-30 md:50">
        <button
          onClick={handleLeftClick}
          className="border bg-white text-blue-700 font-bold border-gray-400 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Left
        </button> 
        <button
          onClick={handleRightClick}
          className="border bg-white text-blue-700 font-bold border-gray-400 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Right
        </button>
      </div>
    </div>
  )
}

export default CookieSlider

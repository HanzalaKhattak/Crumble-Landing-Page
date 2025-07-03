import React from 'react'
import {Link} from 'react-router-dom'
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"

const Footer = () => {
  return (
    <>
    <div className='bg-[#050897] h-60 p-15'>
        <p className='text-white text-2xl'>For any other questions, please contact us at <span className='text-semibold'>info@crumblepakistan.com</span>
        </p>
        <div className='flex gap-2 pt-5 '>
            <a href="https://www.linkedin.com/company/crumblepakistan/posts/?feedView=all">
                <img src={linkedin} alt="linkedin" className='w-9 h-9' />
            </a>
            <a href="https://www.instagram.com/crumblepakistan/?hl=en">
                <img src={instagram} alt="instagram" className='w-9 h-9' />
            </a>
            <a href="https://www.facebook.com/crumblecookiespk/">
                <img src={facebook} alt="facebook" className='w-9 h-9'  />
            </a>
        </div>
        <div className='flex justify-center items-center gap-10 pt-8 text-2xl text-white'>
            <Link to='/terms'>
                <h1>Terms</h1>
            </Link>
            <Link to='/privacy'>
                <h1>Privacy</h1>
            </Link>
            <Link to='/conditions'>
                <h1>Conditions</h1>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Footer
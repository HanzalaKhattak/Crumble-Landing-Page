import React from 'react'
// import NavBar from '../Components/NavBar'
import HeroSection from "../Components/HeroSection"
import Kahaani from '../Components/Kahaani'
import OrderCookies from '../Components/OrderCookies'
// import Footer from '../Components/Footer'
import FAQs from '../Components/FAQs'
import FeedBack from '../Components/FeedBack'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Kahaani/>
      <OrderCookies/>
      <FeedBack/>
      <FAQs/>
    </>
  )
}

export default Home
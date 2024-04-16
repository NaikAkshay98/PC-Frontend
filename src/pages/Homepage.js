import React from 'react'
import Headers from "../components/Headers"
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import image1 from '../assets/images/imagea1.webp';
import CategorySection from '../components/CategorySection';

const slides = [
  { imageUrl: image1, title: 'Slide 1' }];

const Homepage = () => {
  return (
    <div>
      <Headers/>
      <HeroSection slides={slides}/>
      <CategorySection/>
      <Footer/>
    </div>
  )
}

export default Homepage

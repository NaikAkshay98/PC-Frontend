import React from 'react'
import CaretakerNav from '../components/CaretakerNav'
import Footer from '../components/Footer'
import CaretakerProfile from '../components/CaretakerProfile'
const CaretakerProfilePage = () => {
  return (
    <div>
      <header>
        <CaretakerNav/>
      </header>
      <CaretakerProfile />
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerProfilePage

import React from 'react'
import CaretakerNav from '../components/CaretakerNav'
import Footer from '../components/Footer'
import CaretakerSupport from '../components/CaretakerSupport'

const CaretakerSupportPage = () => {
  return (
    <div>
      <header>
        <CaretakerNav/>
      </header>
      <CaretakerSupport/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerSupportPage

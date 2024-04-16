import React from 'react'
import CaretakerRegistration from '../components/CaretakerRegistration';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
const CaretakerRegistrationPage = () => {
  return (
    <div>
        <header>
            <Headers/>
        </header>
      <CaretakerRegistration/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerRegistrationPage

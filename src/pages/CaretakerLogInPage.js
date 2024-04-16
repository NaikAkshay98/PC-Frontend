import React from 'react'
import CaretakerLogIn from '../components/CaretakerLogIn';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
const CaretakerLogInPage = () => {
  return (
    <div>
        <header>
            <Headers/>
        </header>
      <CaretakerLogIn/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerLogInPage

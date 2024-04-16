import React from 'react'
import CaretakerNav from '../components/CaretakerNav'
import Footer from '../components/Footer'
import CaretakerAppointmentReq from '../components/CaretakerAppointmentReq'
const CaretakerAppointmentPage = () => {
  return (
    <div>
      <header>
        <CaretakerNav/>
      </header>
      <CaretakerAppointmentReq />
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerAppointmentPage

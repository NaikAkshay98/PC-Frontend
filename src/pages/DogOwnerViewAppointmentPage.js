import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerViewAppointment from '../components/DogOwnerViewAppointment'
const DogOwnerViewAppointmentPage = () => {
  return (
    <div>
      <header>
        <DogOwnerNav/>
      </header>
      <DogOwnerViewAppointment/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerViewAppointmentPage

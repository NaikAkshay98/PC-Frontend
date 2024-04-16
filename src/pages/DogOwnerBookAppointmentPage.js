import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerBookAppointment from '../components/DogOwnerBookAppointment'
const DogOwnerBookAppointmentPage = () => {
  return (
    <div>
        <header>
            <DogOwnerNav/>
        </header>
        <DogOwnerBookAppointment/>
        <footer>
            <Footer/>
        </footer>      
    </div>
  )
}

export default DogOwnerBookAppointmentPage

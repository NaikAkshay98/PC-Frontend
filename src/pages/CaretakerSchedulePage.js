import React from 'react'
import CaretakerNav from '../components/CaretakerNav'
import Footer from '../components/Footer'
import CaretakerSchedule from '../components/CaretakerSchedule'

const CaretakerSchedulePage = () => {
  return (
    <div>
        <header>
            <CaretakerNav/>
        </header>
        <CaretakerSchedule/>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default CaretakerSchedulePage

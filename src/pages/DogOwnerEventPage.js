import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerEvents from '../components/DogOwnerEvents'
const DogOwnerEventPage = () => {
  return (
    <div>
      <header>
        <DogOwnerNav/>
      </header>
      <DogOwnerEvents/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerEventPage

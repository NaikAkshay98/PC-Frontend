import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerSupport from '../components/DogOwnerSupport'
const DogOwnerSupportPage = () => {
  return (
    <div>
      <header>
        <DogOwnerNav/>
      </header>
      <DogOwnerSupport/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerSupportPage

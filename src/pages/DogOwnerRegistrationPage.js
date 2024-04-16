import React from 'react'
import Headers from '../components/Headers'
import DogOwnerRegistration from '../components/DogOwnerRegistration'
import Footer from '../components/Footer'
const DogOwnerRegistrationPage = () => {
  return (
    <div>
        <header>
            <Headers/>
        </header>
      <DogOwnerRegistration/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerRegistrationPage

import React from 'react'
import DogOwnerLogIn from '../components/DogOwnerLogIn';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
const DogOwnerLogInPage = () => {
  return (
    <div>
        <header>
            <Headers/>
        </header>
      <DogOwnerLogIn/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerLogInPage

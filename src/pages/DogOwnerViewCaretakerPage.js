import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerviewCaretaker from '../components/DogOwnerViewCaretaker'
const DogOwnerViewCaretakerPage = () => {
  return (
    <div>
      <header>
        <DogOwnerNav/>
      </header>
      <DogOwnerviewCaretaker/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DogOwnerViewCaretakerPage

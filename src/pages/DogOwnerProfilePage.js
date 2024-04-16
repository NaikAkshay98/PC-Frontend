import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
import DogOwnerProfile from '../components/DogOwnerProfile'


const DogOwnerProfilePage = () => {
  return (
    <div>
        <header>
            <DogOwnerNav/>
        </header>
        <DogOwnerProfile/>
        <footer>
            <Footer/>
        </footer>      
    </div>
  )
}

export default DogOwnerProfilePage

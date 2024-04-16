import React from 'react'
import LogIn from '../components/LogIn'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
const SignInPage = () => {
  return (
    <div>
      <header>
        <Headers/>
      </header>
      <LogIn/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default SignInPage

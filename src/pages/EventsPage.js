import React from 'react'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import Events from '../components/Events'
const EventsPage = () => {
  return (
    <div>
      <header>
        <Headers/>
      </header>
      <Events/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default EventsPage

import React from 'react'
import Header from '../components/Headers'
import Footer from '../components/Footer'
import EventDetail from '../components/EventDetail'
const EventDetailsPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <EventDetail/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default EventDetailsPage

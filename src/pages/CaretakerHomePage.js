import React from 'react';
import CaretakerNav from '../components/CaretakerNav'; 
import Footer from '../components/Footer'; 
import '../assets/Caretaker.css'
const caretakerHomePage = () => {
    const appointments = [
        { id: 1, petName: 'Buddy', date: '2024-03-29' },
        { id: 2, petName: 'Max', date: '2024-04-05' }
      ];
    
      const events = [
        { id: 1, title: 'Dog Walking Workshop', date: '2024-04-10', time: '2:00 PM' },
        { id: 2, title: 'Canine Nutrition Seminar', date: '2024-04-15', time: '3:00 PM' }
        
      ];
    
  return (
      <div >
        <header>
            <CaretakerNav />
        </header>
        <div className="caretaker-dashboard">
            <div className="dashboard-header">
                <h1>Your Dashboard</h1>
            </div>
            <div className="dashboard-overview">
                <div className="dashboard-card">
                    <h3>Upcoming Walks</h3>
                    {appointments.map((appointment) => (
                        <p key={appointment.id}>{appointment.petName} - {appointment.date} at {appointment.time}</p>
                    ))}
                </div>
                <div className="dashboard-card">
                    <h3>Upcoming Events</h3>
                    {events.map((event) => (
                        <p key={event.id}><strong>{event.title}</strong> - {event.date} at {event.time}</p>
                    ))}
                </div>
                <div className="dashboard-card">
                    <h3>Explore New Techniques</h3>
                    <p>Discover the latest dog training techniques and grooming tips to enhance your skills.</p>
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  );
};

export default caretakerHomePage;
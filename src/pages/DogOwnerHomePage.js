import React from 'react'
import DogOwnerNav from '../components/DogOwnerNav'
import Footer from '../components/Footer'
const DogOwnerHomePage = () => {
  return (
    <div className="admin-home-content">
      <header>
          <DogOwnerNav />
      </header>
      <div className="dog-owner-homepage">
      <div className="homepage-header">
        <h1>Welcome, Dog Owner!</h1>
      </div>
      <div className="homepage-overview">
        <div className="homepage-card">
          <h3>Explore Dog Care Services</h3>
          <p>Discover a wide range of dog care services tailored to your furry friend's needs.</p>
        </div>
        <div className="homepage-card">
          <h3>Connect with Trusted Caretakers</h3>
          <p>Find and connect with experienced and reliable dog caretakers for personalized care.</p>
        </div>
        <div className="homepage-card">
          <h3>Discover Dog-Friendly Places</h3>
          <p>Explore dog-friendly parks, cafes, and attractions to enjoy quality time with your pet.</p>
        </div>
      </div>
    </div>
      <footer>
          <Footer />
      </footer>
  </div>
);
}

export default DogOwnerHomePage

import React from 'react';
import '../assets/Guest.css';

// Import images
import member1Image from '../assets/images/member1.jpeg';
import member2Image from '../assets/images/member2.jpeg';
import member3Image from '../assets/images/member3.jpeg';
import member4Image from '../assets/images/member4.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Our Journey</h1>
      <p>
        Every story has its beginning, and ours started with a wagging tail and a dream. "Pawsome Care" wasn't just a spur-of-the-moment idea—it was a collective vision born from a group of friends who believed in a better world for our canine companions.
      </p>
      <p>
        We've embarked on a quest to revolutionize pet care, fostering a community where every dog is treated like our own. From spontaneous playdates in the park to ensuring your furry friend is in capable hands while you travel, we've pledged to elevate the standards of pet care.
      </p>
      <p>
        Our platform is a tapestry of services woven with threads of trust and convenience. It's a place where love for pets meets innovation, and where caring for your pet becomes a seamless part of your lifestyle.
      </p>
      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          At "Pawsome Care," we see a future where every tail wag counts, where every bark is heard, and where every pet parent sleeps soundly knowing their beloved dog is receiving the best care possible.
        </p>
      </section>
      <section className="meet-the-team">
        <h2>The Hearts Behind the Leash</h2>
        <p>
          Our team is the backbone of our service, a pack of dedicated individuals united by a passion for pets and a commitment to quality.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={member1Image} alt="Team Member 1" />
            <h3>Akshay Naik</h3>
          </div>
          <div className="team-member">
            <img src={member2Image} alt="Team Member 2" />
            <h3>Heer Patel</h3>
          </div>
          <div className="team-member">
            <img src={member3Image} alt="Team Member 3" />
            <h3>Tejashree panchal</h3>
          </div>
          <div className="team-member">
            <img src={member4Image} alt="Team Member 4" />
            <h3>Tejaswini Bn</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

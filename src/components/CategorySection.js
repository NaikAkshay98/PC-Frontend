import React from 'react';
import '../assets/Guest.css'; 

const CategorySection = () => {
  return (
    <div className="category-section">
      <h2>Services Tailored for Your Furry Friends</h2>
      <div className="categories">
        <div className="category">
          <img src="https://cdn-icons-png.flaticon.com/128/4072/4072052.png" alt="Dog Caretaker" />
          <h3>Dog Caretaker</h3>
          <p>Professional and loving care for your pets while you're away, ensuring they're never alone.</p>
        </div>
        <div className="category">
          <img src="https://cdn-icons-png.flaticon.com/512/4285/4285519.png" alt="category" />
          <h3>Scheduled Services</h3>
          <p>Customized services tailored to your pet's routine. Book visits, feeding, and playtime around your schedule.</p>
        </div>
        <div className="category">
          <img src="https://cdn-icons-png.freepik.com/512/5775/5775328.png" alt="Dog Walking" />
          <h3>Dog Walking</h3>
          <p>Active and engaging walks that cater to the exercise needs of your dog, led by experienced walkers.</p>
        </div>
        <div className="category">
          <img src="https://cdn-icons-png.flaticon.com/256/5783/5783354.png" alt="Events" />
          <h3>Events</h3>
          <p>Join our community events designed for socializing and fun — a great way for pets and owners to make new friends!</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Capture.png';
import "../assets/App.css"
const Navigation = ({ userRole }) => {
  const links = {
    guest: [
      {path:'/', label:"Home"},
      {path: '/AboutUsPage', label:"AboutUs" },
      {path: '/EventsPage', label:"Events"},
      {path:'/SupportPage', label:"Support"},
      { path: '/SignInPage', label: 'SignIn' },
      { path: '/RegistrationPage', label: 'SignUp' },
    ],
    caretaker: [
      { path: '/caretaker/dashboard', label: 'Dashboard' },
      { path: '/caretaker/appointments', label: 'Appointments' },
      { path: '/caretaker/schedule', label: 'Schedule' },
    ],
    dogOwner: [
      { path: '/dogOwner/home', label: 'Home' },
      { path: '/dogOwner/viewCaretakers', label: 'View Caretakers' },
      { path: '/dogOwner/bookAppointment', label: 'Book Appointment' },
      { path: '/dogOwner/myAppointments', label: 'My Appointments' },
    ],
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard' },
      { path: '/admin/manageUsers', label: 'Manage Users' },
      { path: '/admin/settings', label: 'Settings' },
    ],
  };

  const roleLinks = links[userRole] || links.guest; 

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-brand" activeClassName="active">
          <img src={logo} alt="Pawsome Care Logo" className="navbar-logo"/>
          <span className="navbar-text">Pawsome Care</span>
        </NavLink>
      </div>
      <div className="navbar-links">
        {roleLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            exact={link.exact || false}
            activeClassName="nav-active"
            className="nav-link"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

/*import "../assets/App.css"
import { Link } from 'react-router-dom';


const Navigation = () => {
 
  return (
    <header>
    <nav className="navbar">
      <Link to='/' key="home">Home</Link>
      <Link to='/AboutUsPage' key="Aboutus">AboutUs</Link>
      <Link to='/EventsPage' key="Event">Events</Link>
      <Link to='/SupportPage' key="support">Support</Link>
      <Link to='/RegistrationPage' key="Registration">SignUp</Link>
      <Link to='/SignInPage' key="Signin">SignIn</Link>
      
      
     
   </nav>
    </header>
  );
};

export default Navigation;
*/
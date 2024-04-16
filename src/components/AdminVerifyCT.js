import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/Admin.css'; 

const VerifyCT = () => {
  const [certificates, setCertificates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory(); 

  useEffect(() => {
    // Fetch certificates pending approval from the API
    const fetchCertificates = async () => {
      try {
        const response = await fetch('http://localhost:6070/api/caretakers/pendingCertificates');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error(`Could not fetch certificates: ${error}`);
      }
    };

    fetchCertificates();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement actual search logic based on API or frontend filtering
  };

  const handlePreview = (certificateId) => {
    // Navigate to the certificate preview page
    history.push(`/AdminCertificatePreview/${certificateId}`);
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <nav>
          <ul className="admin-menu">
          <li><Link to="/AdminHomePage">Home Page</Link></li>
            <li><Link to="/AdminVerifyCT">Verify Caretaker</Link></li>
            <li><Link to="/AdminReviews">Reviews</Link></li>
            <li><Link to="/AdminManageUsers">Manage Users</Link></li>
            <li><Link to="/AdminEventDetails">Event Details</Link></li>
            <li><Link to="/AdminEmailSupport">Email Support</Link></li>
            <li><Link to="/AdminProfile">LogOut</Link></li>            
          </ul>
        </nav>
      </aside>
      <main className="admin-main-content">
        {/* Other main content */}
        <ul className="certificates-list">
          {certificates.map((certificate) => (
            <li key={certificate.id} className="certificate">
              <span className="certificate-id">CT id {certificate.id}</span>
              <span className="certificate-date">
                Uploaded on {certificate.date}
              </span>
              <button type="button" onClick={() => handlePreview(certificate.id)} className="admin-button">
                Preview Certificate
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default VerifyCT;

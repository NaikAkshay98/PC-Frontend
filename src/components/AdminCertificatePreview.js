import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import '../assets/Admin.css';

const AdminCertificatePreview = () => {
  const { caretakerId } = useParams();
  const history = useHistory();
  const [certificateData, setCertificateData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const fetchCertificateData = async () => {
      try {
        const response = await fetch(`http://localhost:6070/api/caretakers/certificate/${caretakerId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCertificateData(data);
      } catch (error) {
        console.error(`Could not fetch certificate data: ${error}`);
        // Here you may want to update the UI to show an error message
      }
    };

    fetchCertificateData();
  }, [caretakerId]);

  const handleAccept = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch(`http://localhost:6070/api/caretakers/${caretakerId}/approveCertificate`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to approve the certificate.');
      }
      alert('Certificate accepted successfully.');
      history.push('/AdminVerifyCt');
    } catch (error) {
      alert(`Error accepting certificate: ${error.message}`);
    }
    setIsProcessing(false);
  };

  const handleDecline = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch(`http://localhost:6070/api/caretakers/${caretakerId}/declineCertificate`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to decline the certificate.');
      }
      alert('Certificate declined.');
      history.push('/AdminVerifyCt');
    } catch (error) {
      alert(`Error declining certificate: ${error.message}`);
    }
    setIsProcessing(false);
  };

  if (!certificateData) {
    return <div>Loading certificate data...</div>;
  }

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
        <div className="certificate-text">
          <h2>Certificate of Completion</h2>
          <p><strong>Trainer Name:</strong> {certificateData.trainerName}</p>
          <p><strong>Course Provider:</strong> {certificateData.courseProvider}</p>
          <p><strong>Date Started:</strong> {certificateData.dateStarted}</p>
          <p><strong>Date Completion:</strong> {certificateData.dateCompletion}</p>
          <p><strong>Certificate Provider:</strong> {certificateData.certificateProvider}</p>
          <p><strong>Course Name:</strong> {certificateData.courseName}</p>
          {/* Add more details if needed */}
          <div className="certificate-actions">
            <button onClick={handleAccept} disabled={isProcessing}>Accept</button>
            <button onClick={handleDecline} disabled={isProcessing}>Decline</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCertificatePreview;

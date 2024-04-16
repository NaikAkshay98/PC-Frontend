import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import "../assets/Admin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminInquiryDetail = () => {
  const [inquiry, setInquiry] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams(); // Get the inquiry ID from the URL
  const history = useHistory();

  useEffect(() => {
    fetchInquiry();
  }, [id]);

  const fetchInquiry = async () => {
    try {
      const response = await axios.get(`http://localhost:6070/api/support/${id}`);
      setInquiry(response.data);
    } catch (error) {
      setError('Failed to fetch inquiry details');
    }
  };

  const updateStatus = async (newStatus) => {
    try {
      const response = await axios.patch(`http://localhost:6070/api/support/${id}`, { status: newStatus });
      setInquiry({ ...inquiry, status: response.data.status }); // Update the local state with the new status
      toast.success(`Status updated to ${newStatus}`); // Display success toast
    } catch (error) {
      console.error('Failed to update inquiry status', error);
      toast.error('Failed to update inquiry status'); // Display error toast
    }
    // history.push('/admin-email-support'); Removed because we're updating the status on this page
  };

  return (
    
      
      

    <div className="inquiry-detail-container">
      <ToastContainer position="top-center" />
      {inquiry && (
        <>
          <div className="inquiry-detail-header">
            <h1>Inquiry Detail</h1>
          </div>
          <div className="inquiry-detail-body">
            <div className="inquiry-detail-content">
              <span className="inquiry-detail-label">Email:</span>
              <p>{inquiry.email}</p>
            </div>
            <div className="inquiry-detail-content">
              <span className="inquiry-detail-label">Inquiry:</span>
              <p>{inquiry.inquiry}</p>
            </div>
            <div className="inquiry-status-buttons">
        <button className="status-button solved" onClick={() => updateStatus('Solved')}>Mark as Solved</button>
        <button className="status-button unsolved" onClick={() => updateStatus('Unsolved')}>Mark as Unsolved</button>
      </div>
            </div>
          </>
        )}
      
      {error && <p className="error-message">{error}</p>}
    </div>
    
  );
};

export default AdminInquiryDetail;

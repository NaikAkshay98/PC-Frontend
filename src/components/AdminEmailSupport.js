import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../assets/Admin.css';

const AdminEmailSupport = () => {
  const [cases, setCases] = useState([]);
  const [displayedCases, setDisplayedCases] = useState([]); // state to keep track of the cases currently displayed
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // could be 'all', 'solved', or 'unsolved'

  useEffect(() => {
    const fetchAllInquiries = async () => {
      try {
        const response = await axios.get('http://localhost:6070/api/support');
        setCases(response.data);
        setDisplayedCases(response.data); // initially show all cases
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch inquiries');
      }
    };

    fetchAllInquiries();
  }, []); // removed refreshToggle from dependencies as it's not being used to trigger the effect

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (newFilter === 'all') {
      setDisplayedCases(cases);
    } else {
      const filteredCases = cases.filter(caseItem => caseItem.status === newFilter);
      setDisplayedCases(filteredCases);
    }
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:6070/api/support?searchTerm=${searchTerm}`);
      setCases(response.data);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to perform search');
    }
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
        <div className="search-container">
          <input type="text" placeholder="Search Case ID or Status" value={searchTerm} onChange={handleSearchChange} />
          <button className="admin-button" onClick={handleSearch}>Search</button>
          </div>
          <div className="filter-buttons">
            <button className="admin-button" onClick={() => handleFilterChange('all')}>All</button>
            <button className="admin-button" onClick={() => handleFilterChange('Solved')}>Solved</button>
            <button className="admin-button" onClick={() => handleFilterChange('Unsolved')}>Unsolved</button>
          </div>
        
        <ul className="cases-list">
        {displayedCases.map((caseItem) => (
            <li key={caseItem.id} className="case">
              <span>Case ID: {caseItem.id}</span>
              <span>Date: {new Date(caseItem.date).toLocaleDateString()}</span>
              <Link to={`/inquiry/${caseItem.id}`}>
                <button className={`status-button ${caseItem.status && caseItem.status.toLowerCase()}`}>
                  {caseItem.status === 'Solved' ? 'Solved' : 'Unsolved'}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        {error && <p className="error-message">{error}</p>}
      </main>
    </div>
  );
};

export default AdminEmailSupport;

import React, { useState } from 'react';
import { BrowserRouter as Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../assets/Admin.css'; 
import AdminUserCountCard from '../components/AdminUserCountCard';
import AdminManageUsers from '../components/AdminManageUsers';
import AdminReviews from '../components/AdminReviews';
import AdminVerifyCT from '../components/AdminVerifyCT';
import AdminEventDetails from '../components/AdminEventDetails';
import AdminEmailSupport from '../components/AdminEmailSupport';
import AdminProfile from '../components/AdminProfile';

const AdminHomePage = () => {
  let { path } = useRouteMatch();
  const [userCount] = useState(42);
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
        <Switch>
          <Route exact path={path}>
            <div className='Admin-dashboard'>
              <h1>Admin Dashboard</h1>
              <div className="AdminCard">
    <AdminUserCountCard count={userCount} />
  </div>
            </div>
          </Route>
          <Route path={`${path}/verifyct`} component={AdminVerifyCT} />
          <Route path={`${path}/managereviews`} component={AdminReviews} />
          <Route path={`${path}/manageusers`} component={AdminManageUsers} />
          <Route path={`${path}/eventdetails`} component={AdminEventDetails} />
          <Route path={`${path}/emailsupport`} component={AdminEmailSupport} />
          <Route path={`${path}/profile`} component={AdminProfile} />
        </Switch>
      </main>
    </div>
  );
};

export default AdminHomePage;

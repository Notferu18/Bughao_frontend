import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/'); 
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <h1>Welcome</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h2>Welcome to your Dashboard!</h2>
          <p>You have successfully navigated through the routing setup.</p>
          
          <div className="stats-row">
            <div className="stat-box">
              <strong>Status:</strong> Active
            </div>
            <div className="stat-box">
              <strong>Role:</strong> Admin
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
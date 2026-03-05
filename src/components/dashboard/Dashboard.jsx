import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from './UI/sidebar';
import Header from './UI/header'; 

import { Users } from './forms/users';
import { Orders } from './forms/orders';
import { Settings } from './forms/settings';

import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'users': return <Users />;
      case 'orders': return <Orders />;
      case 'settings': return <Settings />;
      default: return (
        <>
          <div className="welcome-banner">
            <h2>Welcome Back!</h2>
            <p></p>
          </div>

          <section className="dash-grid">
            <div className="dash-card">
              <span className="card-title">Total Revenue</span>
              <div className="card-value">₱124,500.00</div>
              <span className="card-trend up">+12% vs last month</span>
            </div>

            <div className="dash-card">
              <span className="card-title">Active Orders</span>
              <div className="card-value">42</div>
              <span className="card-trend">8 pending delivery</span>
            </div>

            <div className="dash-card">
              <span className="card-title">New Users</span>
              <div className="card-value">156</div>
              <span className="card-trend up">+5 today</span>
            </div>

            <div className="dash-card">
              <span className="card-title">System Status</span>
              <div className="card-value" style={{ color: '#10b981' }}>Online</div>
              <span className="card-trend">All systems operational</span>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="dash-wrapper">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        handleLogout={() => navigate('/')} 
      />
      
      <main className="main-panel">
        <Header title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
import React from 'react';

const Sidebar = ({ activeTab, setActiveTab, handleLogout }) => {
  const menuItems = ['dashboard', 'users', 'orders', 'settings'];

  return (
    <aside className="dash-sidebar">
      <div className="sidebar-header">
        <div className="dash-brand">Corp</div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button 
            key={item}
            className={`nav-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn" style={{ width: '100%' }}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
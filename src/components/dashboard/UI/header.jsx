import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="dash-header">
      <h1 className="dash-title">{title}</h1>
      <div className="user-profile">
        <span>Admin User</span>
        <div className="avatar-circle">A</div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header-title">Logo</h1>
        <ul className="header-list"> 
          <li className="header-item">Home</li>
          <li className="header-item">About</li>
          <li className="header-item">Contact</li>
          <li className="header-item">Services</li>
      </ul>
    </div>
  );
};

export default Header;
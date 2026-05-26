import React from 'react';
import './Navbar.css';
// Import Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Typography } from '@mui/material';

function Navbar() {
 

  return (
    <nav className="navbar" style={{ marginTop: '1px' }}>
      <div className="navbar-logo" style={{ cursor: 'pointer' }}>
        <img src="/feedback.png" alt="Logo 2" />
      </div>
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
        Washroom Management Solution
      </Typography>
      <div className="navbar-profile">
        <span className="navbar-welcome-message">Welcome Admin!</span>
        <i className="fas fa-user navbar-profile-icon"></i>
      </div>
    </nav>
  );
}

export default Navbar;

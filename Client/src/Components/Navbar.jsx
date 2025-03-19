import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <Link to="/Dashboard"><h1>Applications</h1></Link>
          <Link to="/Home"><h1>Home</h1></Link>
          <Link to="/Profile"><h1>Profile</h1></Link>
          <Link to="/Create"><h1>Create</h1></Link>
        </div>
        <button className="logout-btn"><Link to="/Login">Logout</Link></button>
      </nav>
    </div>
  );
};

export default Navbar;
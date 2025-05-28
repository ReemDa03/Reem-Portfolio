import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css'; // للتنسيق

function Navbar() {
  return (
    <nav className="navbar">
      
        <div className="logo">Ree<span className='letter-m'>M</span></div>
      <ul className="nav-links">
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#skills">Skills</Link></li>
        <li><Link smooth to="#projects">Projects</Link></li>
        <li><Link smooth to="#contact">Contact Us</Link></li>
      </ul>
      
      
    </nav>
  );
}

export default Navbar;

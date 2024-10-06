import React from 'react';
import logo from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="EasyLearning Logo" />
      </div>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;

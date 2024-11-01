import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import image from '../assets/images/samproff_background_5pic.jpg';
import style from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={`bg-light ${style.sidebar} p-4 text-center`}>
      <div className="text-center mb-4">
        <img
          src={image}
          alt="Profile"
          className={`img-fluid rounded-circle mb-3 ${style['profile-image']}`}
        />
        <h1 className="h4">Samuel Nkrumah Bonsu</h1>
        <p className="text-muted">IT Consultant in Computer Network Engineering, AI & Frontend Development</p>
      </div>
      <nav className={`${style.navLinks} navbar navbar-expand-md navbar-light`}>
        <ul className="navbar-nav flex-column d-flex align-align-items-center">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">Education</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link">Work</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
      <footer className={`mt-4 ${style.footer} small`}>
        <div className={`mt-3 ${style.media} `}>
            <a href="#" className="mx-2" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="mx-2" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="mx-2" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="mx-2" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        &copy; {new Date().getFullYear()} Samuel Nkrumah Bonsu. All rights reserved.
      </footer>
    </aside>
  );
};

export default Sidebar;

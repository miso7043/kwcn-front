import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li><Link to="/">HOME</Link></li>
      <li className="dropdown">
        <span>ABOUT US</span>
        <ul className="dropdown-content">
          <li><Link to="/about/history">History</Link></li>
          <li><Link to="/about/future">Future Plans</Link></li>
          <li><Link to="/about/finance">재정 기록</Link></li>
          <li><Link to="/about/organization">조직 시스템</Link></li>
        </ul>
      </li>
      <li><Link to="/events">EVENTS</Link></li>
      <li><Link to="/media">MEDIA</Link></li>
      <li className="dropdown">
        <span>Information</span>
        <ul className="dropdown-content">
          <li><Link to="/info/tax">Tax</Link></li>
          <li className="dropdown-sub">
            <span>Job Academy</span>
            <ul className="dropdown-content-sub">
              <li><Link to="/info/jobacademy/lecture1">Lecture 1</Link></li>
            </ul>
          </li>
          <li className="dropdown-sub">
            <span>추가 제안</span>
            <ul className="dropdown-content-sub">
              <li><Link to="/info/suggestions/tax">Tax 상담 내용 정리 후 게시</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <span>GET INVOLVED</span>
        <ul className="dropdown-content">
          <li><Link to="/getinvolved/volunteer">Volunteer</Link></li>
        </ul>
      </li>
      <li><Link to="/login">MEMBER LOGIN</Link></li>
      <li><Link to="/donate">DONATE NOW</Link></li>
    </ul>
  </nav>
);

export default Navbar;

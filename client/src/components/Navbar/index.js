import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage}) => {
  return (
    <navbar className="navbar">
      <ul className="navbar-links">
        <li 
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => setCurrentPage('home')}>
          Home
        </li>
        <li
          className={currentPage === 'list' ? 'active' : ''}  
          onClick={() => setCurrentPage('list')}>
          Your List
        </li>
        <li
          className={currentPage === 'comments' ? 'active' : ''}
          onClick={() => setCurrentPage('comments')}>
          Your Comments
        </li>
      </ul>
      <span 
        className={`navbar-SignIn-SignOut ${currentPage === 'login' ? 'active' : ''}`}
        onClick={() => setCurrentPage('login')}>
        Login / Logout  
      </span>
    </navbar>
  );
};

export default Navbar;
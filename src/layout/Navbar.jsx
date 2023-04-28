import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar-container">
        <div className="navbar">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/show-books" className='nav-link'>Show Books</Link>
          <Link to="/add-books" className='nav-link'>Add Books</Link>
        </div>
      </div>
      
      
    )
}

export default Navbar

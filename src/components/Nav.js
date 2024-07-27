import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#online_order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
  )
}

export default Nav
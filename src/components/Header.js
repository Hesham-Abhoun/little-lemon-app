import React from "react";
import logo from "../assets/little_lemon_logo.jpg";
import Nav from "./Nav"
import  './Header.css'
const Header = () => {
  return (
    <header>
    <img src={logo} alt="Little Lemon Logo"/>
      <Nav/>
    </header>
  )
};

export default Header;

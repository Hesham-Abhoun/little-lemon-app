import React from "react";
import logo from "../assets/little_lemon_logo.jpg";
import Nav from "./Nav"
const Header = () => {
  return (
    <header>
    <img src={logo} alt="Little Lemon Logo"/>
      <Nav/>
    </header>
  )
};

export default Header;

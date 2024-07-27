import React,{useState} from "react";
import logo from "../assets/little_lemon_logo.jpg";
import Nav from "./Nav"
import  './Header.css'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
    <img src={logo} alt="Little Lemon Logo"/>
    <button className="menu-toggle" onClick={toggleMenu}>
        ☰
    </button>
      <Nav menuOpen={menuOpen}/>
    </header>
  )
};

export default Header;

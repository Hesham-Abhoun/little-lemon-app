import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <img src="" alt="ds" />
      <div >
        <h5>Doormat navigation</h5>
        <ul className="footer-links" >
          <li >
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#menu">menu</a>
          </li>
          <li>
            <a href="#reservations">reservations</a>
          </li>
          <li>
            <a href="#order_online">Order Online</a>
          </li>
          <li>
            <a href="#login">login</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul className="contact-links">
          <li>
          <a href="#address">Address</a>
          </li>
          <li>
          <a href="#phone_number">Phone number</a>
          </li>
          <li>
          <a href="#email">Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Socail Media Links</h5>
        <ul className="contact-links">
          <li>
          <a href="#facebook">facebook</a>
          </li>
          <li>
          <a href="#instagram">instagram</a>
          </li>
          <li>
          <a href="#twitter">twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

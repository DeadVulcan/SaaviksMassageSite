import React from "react";
import BookingInstructions from "./BookingInstructions";

const Header = () => (
  <header className="header" data-aos="zoom-in">
    <h1>Erman's Mobile Massage</h1>
    <nav>
      <a
        className="book-now-button"
        href="https://ermansmobilemassage.setmore.com/saavik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
      
      <BookingInstructions />
    </nav>
  </header>
);

export default Header;

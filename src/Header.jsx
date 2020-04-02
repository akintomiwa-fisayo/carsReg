import React from 'react';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <span className="logo">CarsReg</span>
        <div className="social">
          <span className="fab fa-facebook-f" />
          <span className="fab fa-twitter" />
          <span className="fab fa-pinterest-p" />
          <span className="fab fa-instagram" />
        </div>
      </header>
    );
  }
}

export default Header;

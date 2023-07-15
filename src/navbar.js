import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Navbar = () => {
  const [location, setLocation] = useState('');
  const [cardHidden, setCardHidden] = useState(true);

  const toggleCard = () => {
    setCardHidden(!cardHidden);
  };

  const handleLocationClick = () => {
    if (location !== null && location !== '') {
      // Handle location click event
    } else {
      alert('Please set location');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg nav-main navbar-dark" id="nav-main">
      <div className="container-fluid">
        <img
          src="https://www.linkpicture.com/q/logo-exp-light.png"
          alt="Foodex Logo"
          width="120px"
          style={{ marginLeft: '40px' }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact and Support
              </a>
            </li>
            <li className="nav-item">
              {location !== null && location !== '' ? (
                <a className="nav-link" href="browse" onClick={handleLocationClick}>
                  Browse Items
                </a>
              ) : (
                <a className="nav-link" href="#" onClick={() => alert('Please set location')}>
                  Browse Items
                </a>
              )}
            </li>
            <li className="nav-item">
              {location !== null && location !== '' ? (
                <a className="nav-link" href="restaurants" onClick={handleLocationClick}>
                  Browse Restaurants
                </a>
              ) : (
                <a className="nav-link" href="#" onClick={() => alert('Please set location')}>
                  Browse Restaurants
                </a>
              )}
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            {!1 ? (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-reg" href="login">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-reg" href="register">
                    Sign Up
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-reg" href="login">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-reg" href="register">
                    Sign Up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

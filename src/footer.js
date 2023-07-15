import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted footer-main">
      <section className="">
        <div className="container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 mx-auto col-xl-2 mb-4">
              <img src="https://www.linkpicture.com/q/logo-exp.png" alt="Foodex Logo" style={{ width: '200px', marginTop: '50px' }} />
            </div>
            <div className="col-md-2 col-lg-2 mx-auto col-xl-2 mb-4"></div>
            <div className="col-md-2 col-lg-2 mx-auto col-xl-2 mb-4"></div>
            <div className="col-md-2 col-lg-2 mx-auto col-xl-2 mb-4"></div>
          </div>

          <div className="row mt-3 text-white">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                About Foodex
              </h6>
              <p>
                <a href="home" className="text-reset">Home</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Who We Are</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Blog</a>
              </p>
              <p>
                <a href="contact" className="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Work With Us</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                For Restaurants
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="partner" className="text-reset">Partner With Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Ride With Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact</a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Learn More
              </h6>
              <p>
                <a href="#!" className="text-reset">Terms</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Privacy</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Security</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Rules and Regulations</a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Follow Foodex
              </h6>
              <FaInstagram className="social-icon" />
              <FaFacebookF className="social-icon" />
              <FaYoutube className="social-icon" />
              <FaLinkedinIn className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)', color: 'white' }}>
        &#169; 2023 Copyright:
        <a className="text-reset fw-bold" href="home">Foodex.com</a>
      </div>
    </footer>
  );
};

export default Footer;

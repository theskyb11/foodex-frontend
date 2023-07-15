import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import Navbar from './navbar';
import Footer from './footer';
const MainContainer = () => {
  const [location, setLocation] = useState('');

  const findMyCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const bdcApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
          getApi(bdcApi);
        },
        (err) => {
          alert(err.message);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  const getApi = (bdcApi) => {
    fetch(bdcApi)
      .then((response) => response.json())
      .then((results) => {
        const finalLocation =
          results.locality +
          ', ' +
          results.city +
          ', ' +
          results.principalSubdivision +
          ', ' +
          results.countryName;
        setLocation(finalLocation);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="main-container">
      {/* Include the header component */}

      <Navbar />
      
      <div className="container-fluid jumbotron">
        <div className="row">
          <div className="col">
            <h2 className="header-main">
              Satisfying Your Cravings, One Delivery at a Time
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col search-container">
            <form
              action="setlocation"
              method="post"
              className="search-loc-form"
            >
              <button
                className="gps-button"
                id="gps-button"
                style={{ marginRight: '10px' }}
                type="button"
                onClick={findMyCoordinates}
              >
               <FontAwesomeIcon icon={faMapMarkerAlt} />
              </button>
              <input
                type="search"
                placeholder="Search for your Location"
                className="search-loc"
                id="search-loc"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="go-button" id="go-button" type="submit">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default MainContainer;

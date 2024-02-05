import React from 'react';
import { Link } from 'react-router-dom';
import image from '../resources/Welcome.jpg'
import image2 from '../resources/images2.png'

function WelcomePage() {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const backgroundContainerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  };

  const backgroundImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
  };

  const contentContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  };

  const logoContainerStyle = {
    marginBottom: '20px',
  };

  const logoImageStyle = {
    height: '250px',
    width: 'auto',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const loginButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease-in-out',
  };


  return (
    <div style={containerStyle}>
      <div style={backgroundContainerStyle}>
        <img style={backgroundImageStyle} src={image} alt="Background" />
      </div>
      <div style={contentContainerStyle}>
        <div style={logoContainerStyle}>
          <img style={logoImageStyle} src={image2} alt="React Logo" />
        </div>
        <div style={buttonContainerStyle}>
          <Link
            to="/login"
            style={{ ...loginButtonStyle }}>
            Proceed To Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;

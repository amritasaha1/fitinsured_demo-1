import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-fi.mov' autoPlay loop muted />
      <h1 style={{ color: '#D37506' }}>FITINSURED</h1>
      <p style={{ color: '#034B03', fontWeight: 'bold' }}>Get Insured, Stay Healthy, Pay Less</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          <p style={{ color: '#4863A0', fontWeight: 'bold',fontSize:'32px' }}>GET STARTED</p>
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
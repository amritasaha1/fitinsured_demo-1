import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import FitnessTipCards from './FitnessTipCards';
import Footer from '../Footer';
import FitnessApp from './FitnessApp';

function AccessFitnessApp() {
  return (
    <>
      <FitnessApp /> 
      <FitnessTipCards />
      <div style={{  
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '1400px',
  height: '50px',
  fontSize: '20px', 
  color:'#4a54f1'}}>Meet FITINSURED Fitness Partner! Enrole for free.</div>
      <iframe style={{width:'1800px', height:'1500px'}} src="https://discover.wellnessliving.com/capterra-fitness?utm_source=capterra"></iframe>
      <Footer />
   </>
  );
}
export default AccessFitnessApp;
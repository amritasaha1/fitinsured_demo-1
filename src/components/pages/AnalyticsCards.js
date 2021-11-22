import React from 'react';
import './AnalyticsCards.css';
import CardItem from './AnalyticsCardItem';
import Footer from '../Footer';

function AnalyticsCards() {
  return (
    <div className='cards'>
      <h1>Get all your detail in one view!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='wc.jpg'
              text='Your Weight Log +/- 3 months'
              label='Weight Curve'
             
            />
            <CardItem
              src='pdc.jpg'
              text='View Diabetic Chart'
              label='Diabetic Forecast'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='aphc.jpg'
              text='Allover Health Analytics'
              label='Health Analytics'
            
            />
            <CardItem
              src='dc.png'
              text='Your Health and Your Discount - Goes Hand by Hand'
              label='Health vs Discount'
           
            />
            <CardItem
              src='sel.png'
              text='How regular you are, on your fitness plan?'
              label='Exercise Log'
           
            />
          </ul>
        </div>
      </div>
    
    </div>
    
  );
}

export default AnalyticsCards;

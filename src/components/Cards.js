import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Start your journey with us, to be FIT & INSURED!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img-9.jpg'
              text='Get BEST SUITABLE Policy in 20 minutes'
              label='Policies'
              path='/get-best-policy'
            />
            <CardItem
              src='img-2.jpg'
              text='Premium discounts, have you earned some?'
              label='Discounts'
              path='/check-discounts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img-3.jpg'
              text='Stay Fit, Earn Discount!'
              label='Fitness Log'
              path='/access-fitness-app'
            />
            <CardItem
              src='img-4.jpg'
              text='Fit & Insured? Check what analytics says!'
              label='Dashboard'
              path='/fitinsured-dashboard'
            />
            <CardItem
              src='img-8.jpg'
              text='Doctor Appontments , Medical Reports!'
              label='Medical Diary'
              path='/get-medical-detail'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

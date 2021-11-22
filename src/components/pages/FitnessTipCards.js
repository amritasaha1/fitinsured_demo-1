import React from 'react';
import './FitnessTipCards.css';
import CardItem from './AnalyticsCardItem';
import Footer from '../Footer';

function FitnessTipCards() {
  return (
    <div className='cards'>
      <h1>Fitinsured "Stay Fit" Tips!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://jeffreysterlingmd.com/wp-content/uploads/2015/01/healthy-eating-diet.jpg'
              text='Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains.'
              label='Eat a healthy diet'
             
            />
            <CardItem
              src='https://www.mouthhealthy.org/~/media/MouthHealthy/Images/A-Z/Quit-smoking-A-Z.png?h=200&la=en&w=275&hash=9FDF9704954711737AB0D9D5B67B8721847B1CD9'
              text='If you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. '
              label='Don’t smoke.'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://media1.popsugar-assets.com/files/thumbor/ghuOIBNLRaxsS4P_Cb76FvIMcAY/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2013/02/08/2/192/1922729/e7fb44d7fee23505_75627079.jpg'
              text='Want to take the prize at the company bowling outing? Or PR at this year’s Turkey Trot? Fitness goals are a great way to stay active, get in shape, and bask in the glory of victory. '
              label='Be active'
            
            />
            <CardItem
              src='https://post.healthline.com/wp-content/uploads/2020/09/PVPV194-Blood_Sugar_Test-732x549-Thumbnail.jpg'
              text='Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. '
              label='Check Blood Sugar Regularly'
           
            />
            <CardItem
              src='https://eldergym.com/wp-content/uploads/2019/08/exercises-for-the-elderly-featured.jpg'
              text='By exercising for 10 minutes with intensity and effort, you will be more likely to give your body what it needs to keep adapting, building muscle, and increasing your capacity.'
              label='Our 10-minute exercise video of today'
           
            />
          </ul>
        </div>
      </div>
    
    </div>
    
  );
}

export default FitnessTipCards;

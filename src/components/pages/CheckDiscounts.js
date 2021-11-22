import React from 'react';
import '../../App.css';
import { useState } from "react";
import CheckDiscountCard from './CheckDiscountCard';
import Footer from '../Footer';

function CheckDiscounts(){
  return  ( 
<div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  <table>
    <tr>
      <br></br>
      <br></br>
      <td style={{  
  backgroundImage: "url(" + "" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '70px',
  height: '500px',
  align: 'center'
  
}}>.</td>
      <td style={{  
  backgroundImage: "url(" + "https://assets.heart.co.uk/2013/28/happy-family-online-1374072115-large-article-0.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '500px',
  height: '500px'
  
}}>.</td>
<td style={{  
  backgroundImage: "url(" + "" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100px',
  height: '500px',
  align: 'center'
  
}}>.</td>
      <td style={{  
  backgroundImage: "url(" + "" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '500px',
  height: '500px',
  align: 'center'
  
}}><CheckDiscountCard /></td>
      <td id="result" style={{  
  backgroundImage: "url(" + "" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  align:'top',
  width: '470px',
  height: '500px'
  
}}>.</td>
   <td id="" style={{  
  backgroundImage: "url(" + "" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  align:'top',
  width: '40px',
  height: '500px'
  
}}>.</td>
    </tr>
  </table>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <Footer />
</div> );
}

export default CheckDiscounts;

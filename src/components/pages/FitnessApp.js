import React from 'react';
import '../../App.css';
import { useState } from "react";
import FitnessAppCard from './FitnessAppCard';
import Footer from '../Footer';

function FitnessApp(){
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
  backgroundImage: "url(" + "https://media1.popsugar-assets.com/files/thumbor/EPwQk8dslNolONpeX9403ucZp6w/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/07/946/n/1922729/12057f5e5dc48fd3ea71c2.46884185_/i/health-fitness-planners-journals.jpg" + ")",
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
  
}}><FitnessAppCard /></td>
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
 </div> );
}

export default FitnessApp;

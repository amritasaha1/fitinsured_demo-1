import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function GetBestPolicy() {
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
  backgroundImage: "url(" + "https://dims.healthgrades.com/dims3/MMH/27c07d4/2147483647/strip/true/crop/4950x2769+0+265/resize/715x400!/format/webp/quality/75/?url=https%3A%2F%2Fd26ua9paks4zq.cloudfront.net%2F04%2F0c%2F91012c674653a51f22d9183166f0%2Fimage-doctors-appointment.jpg" + ")",
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
      <td style={{width: '500px',height: '500px'}}>
        <br></br><h2>Your next doctor appointment</h2>
        <br></br><h2>23 Nov, 2021, 9 AM EST, Dentist</h2>
        <br></br><h3>We will remind you again!</h3>

        <br></br><br></br>
        <Link to="/about">View All Appointments</Link>

        <br></br><br></br>
        <Link to="/about">View All Medical Reports</Link>

      </td>
      <td id="result" style={{  
  backgroundImage: "url(" + "https://media.istockphoto.com/photos/medical-reports-picture-id1248785997" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  align:'top',
  width: '370px',
  height: '500px'
  
}}>.</td>
    </tr>
  </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  <Footer />
</div> );
}

export default GetBestPolicy;
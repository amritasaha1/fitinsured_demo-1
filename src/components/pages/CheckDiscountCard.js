
import { useState } from "react";
import ReactDOM from "react-dom";
import Footer from '../Footer';

function CheckDiscountCard() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    document.getElementById("result").innerHTML = "Based on your medical reports and fitness routine, FITINSURED offers you 5% discount on your premium. <br></br> Keep it up!";
    //alert(inputs);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Please provide us the information below.<br></br><br></br>
     We will retirve your discount detail. <br></br></label>
      <br></br>
      <br></br>
      <br></br>
      <label>Full Name :  &nbsp;
      <input 
        type="text" 
        name="username" 
        value=  {inputs.username || ""} 
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      </label>
      <label>Contact Number :  &nbsp;
        <input 
          type="text" 
          name="age" 
          value=  {inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Policy Number :   &nbsp;
        <input 
          type="text" 
          name="smoke" 
          value=  {inputs.smoke || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Email Address :  &nbsp;
        <input 
          type="text" 
          name="exercise" 
          value=  {inputs.exercise || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <input type="submit" />
    </form>
    </>
  )
}

export default CheckDiscountCard;


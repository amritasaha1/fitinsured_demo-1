
import { useState } from "react";
import ReactDOM from "react-dom";
import Footer from '../Footer';

function FitnessAppCard() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    document.getElementById("result").innerHTML = "Good job there! Come back tomorrow. <br></br>Time for Rewards! You can access some <a href src=#>healthy recipes here</a>.";
    //alert(inputs);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Take a moment and log your fitness activities below!<br></br><br></br>
     40 days at a row will get you a reward.<br></br>
     <br></br>
     A better looking dashboard will earn you a discount.<br></br></label>
      <br></br>
      <br></br>
      <br></br>
      <label>Exercise Type :  &nbsp;
      <input 
        type="text" 
        name="exerciseType" 
        value=  {inputs.exerciseType || ""} 
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      </label>
      <label>Exercise Duration : &nbsp;
        <input 
          type="text" 
          name="exerciseDuration" 
          value=  {inputs.exerciseDuration || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Step Count :   &nbsp;
        <input 
          type="text" 
          name="StepCount" 
          value=  {inputs.StepCount || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Calorie Intake :  &nbsp;
        <input 
          type="text" 
          name="Calorie" 
          value=  {inputs.Calorie || ""} 
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        </label>
        <label>Fasting Hours :  &nbsp;
        <input 
          type="text" 
          name="FastHours" 
          value=  {inputs.FastHours || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Water Intake:  &nbsp;
        <input 
          type="text" 
          name="waterIntake" 
          value=  {inputs.waterIntake || ""} 
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        </label>
        <label>Today's weight:  &nbsp;
        <input 
          type="text" 
          name="weight" 
          value=  {inputs.weight || ""} 
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

export default FitnessAppCard;


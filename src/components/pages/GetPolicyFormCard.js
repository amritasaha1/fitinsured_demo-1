
import { useState } from "react";
import ReactDOM from "react-dom";

function GetPolicyFormCard() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    document.getElementById("result").innerHTML = "Based on your input , policy <a href src=#>Fitinsured GOLD</a> seems best for you, take a moment to review. <br></br> If you like to enrole, <a href src=#>click here</a>. <br></br>Once you enrole, you get free access to out fitness app, medical control and analytics dashboard ";
    //alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>Please provide us the information below ! <br></br><br></br>
     Based on this, FITINSURED Rule Engine will find and offer <br></br>a policy, that is best suited for you.</label>
      <br></br>
      <br></br>
      <br></br>
      <label>Enter your name :  &nbsp;
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
        <label>Do you smoke? :   &nbsp;
        <input 
          type="text" 
          name="smoke" 
          value=  {inputs.smoke || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Do you exercise regularly? :  &nbsp;
        <input 
          type="text" 
          name="exercise" 
          value=  {inputs.exercise || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Are you in good health? :  &nbsp;
        <input 
          type="text" 
          name="health" 
          value=  {inputs.health || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Are you on any regular medication? :  &nbsp;
        <input 
          type="text" 
          name="med" 
          value=  {inputs.med || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Are you diabetic? :  &nbsp;
        <input 
          type="text" 
          name="diabetic" 
          value=  {inputs.diabetic || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Do you have high blood pressure? :  &nbsp;
        <input 
          type="text" 
          name="bp" 
          value=  {inputs.bp || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Do you have high cholesterol? :  &nbsp;
        <input 
          type="text" 
          name="cholesterol" 
          value=  {inputs.cholesterol || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Have you been diagonosed with cancer? :  &nbsp;
        <input 
          type="text" 
          name="cancer" 
          value=  {inputs.cancer || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Have you been diagonosed with COVID-19? :  &nbsp;
        <input 
          type="text" 
          name="covid" 
          value=  {inputs.covid || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <label>Please upload your supporting documents here.  &nbsp;
        </label>
        <br></br>
        <br></br>
        <div>
                <input type="file" />
                <br></br>
                <br></br>
                <button >
                  Upload the supporting documents here.
                </button>
                
        </div>
        <br></br>
        <br></br>
        <span><input type="submit"/> </span>
        <span></span>&nbsp;&nbsp;&nbsp;
        <span><button>Save now and Submit later.</button></span>
        <br></br>
        <br></br>
       </form>
  )
}

export default GetPolicyFormCard;


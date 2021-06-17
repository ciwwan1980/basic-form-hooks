import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
const [submitted, setSubmitted]= useState(false)
  const handleInputFirsNameChange = (e) => {
    console.log(e.target.value);
    setValues({
      ...values,
      firstName: e.target.value,
    });
  };

  const handleInputLastNameChange = (e) => {
    setValues({
      ...values,
      lastName: e.target.value,
    });
  };

  const handleInputEmailChange = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmitted(true)
  }


  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

      {submitted ? <div className="success-message">ThankYou! You have registered successfully</div>: null }
        <input
          onChange={handleInputFirsNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"  
         
        />
        <span>please enter your firstName</span>
        <input
          onChange={handleInputLastNameChange}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         <span>please enter your lastName</span>
        <input
          onChange={handleInputEmailChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
         <span>please enter your E-Mail</span>

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;

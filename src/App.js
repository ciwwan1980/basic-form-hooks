import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
const [submitted, setSubmitted]= useState(false)

const [valid, setValid]=useState(false)

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
    if (values.firstName && values.lastName&& values.email){
      setValid(true)
    }
  }


  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

      {submitted &&valid ? <div className="success-message">ThankYou! You have registered successfully</div>: null }
        <input
          onChange={handleInputFirsNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"  
         
        />
        {submitted && !values.firstName ? <span>please enter your firstName</span> :null}
        <input
          onChange={handleInputLastNameChange}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         {submitted && !values.lastName ? <span>please enter your lastName</span>:null}
        <input
          onChange={handleInputEmailChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
         {submitted && !values.email ?<span>please enter your E-Mail</span> :null  }

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;

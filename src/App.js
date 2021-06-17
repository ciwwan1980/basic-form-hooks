import React, {useState} from 'react';
import './App.css';

function App() {

  const [values, setValues]= useState({
    firstName:"", 
    lastName:"", 
    email:""
  })

  const handleInputFirsNameChange=(e)=>{

    console.log(e.target.value)
    setValues({
      ...values, 
      firstName:e.target.value
    })
  }

  return (
    <div className="form-container">
  
    <form className="register-form">
    <input
    
          onChange={handleInputFirsNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
    
     <input
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         <input
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <button className="form-field" type="submit">
        
          Register
        </button>
    </form>
    </div>
  );
}

export default App;

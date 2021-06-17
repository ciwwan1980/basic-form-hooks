import React, {useState} from 'react';
import './App.css';

function App() {

  const [values, setValues]= useState({
    firstName:"", 
    lastName:"", 
    email:""
  })

  return (
    <div className="form-container">
  
    <form className="register-form">
    <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
    
     <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         <input
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

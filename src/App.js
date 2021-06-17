import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
  
    <form className="register-form">
    <input
          id="first-name"
          class=""
          type="text"
          placeholder="First Name"
          name="firstName"
        />
    
     <input
          id="last-name"
          class=""
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         <input
          id="email"
          class=""
          type="text"
          placeholder="Email"
          name="email"
        />

        <button class="form-field" type="submit">
          Register
        </button>
    </form>
    </div>
  );
}

export default App;

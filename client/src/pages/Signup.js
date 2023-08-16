import React from 'react';
import './Login.css';

const Signup = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <span>Literarily Lounging</span>
        <span>SignUp Page</span>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email"></input>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"></input>
          <label for="password">Password:</label>
          <input type="text" id="password" name="password"></input>
          <input type="submit" value="Submit" className="submitBut"
          ></input>
        </div>
      </div>
    </div>  
  );
}

export default Signup;
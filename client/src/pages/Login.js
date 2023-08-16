import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <span>Literarily Lounging</span>
        <span>Login</span>
        <div>
          <label for="username">Username or Email:</label>
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

export default Login;
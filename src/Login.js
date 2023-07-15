import React from 'react';
import './login.css';
import Navbar from './navbar';
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!username || !password) {
      alert("All fields are required.");
    } else {
      
    }
  };

  return (
      <div className="container-fluid carousel-div">
        <Navbar></Navbar>
      <div className="row">
        <div className="col register-div logo-div">
          <img
            src="https://www.linkpicture.com/q/logo-exp-light.png"
            alt="Foodex Logo"
            width="500px"
          />
        </div>
        <div className="col login-div">
          
          <form onSubmit={handleSubmit} className="login-form" id="form">
            <h3 className="form-heading">Login</h3>
            <br />
            <p className="form-subhead">
              New to Foodex? <a href="register" className="link">Create an Account</a>
            </p>
            <br />
            <input type="text" name="username" placeholder="Username" className="input-login" />
            <input type="password" name="password" placeholder="Password" className="input-login" />
            <a href="forgot" className="link forgot-pass">Forgot Password?</a>
            <br />
            <input type="submit" value="Login" className="login-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

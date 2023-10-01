import { useState } from "react";
import { Router, useNavigate } from 'react-router-dom';
// import styles from './Style.css';
import axios from "axios";
import Config from '../../config';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    uname: "Username does not exist",
    pass: "Invalid Password"
  };
  function renderErrorMessage(name) {
    return name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  }
  async function login(event) {
    event.preventDefault();
    
    try {
      await axios.post(Config.backEnd + "/api/v1/customer/login", {
        username: username,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Invalid Username") {

          setErrorMessages({ name: "uname", message: errors.uname });
        }
        else if (res.data.message === "Login Success") {

          // navigate('/LWilson');
          window.location.href = '/LWilson';
        }
        else {

          setErrorMessages({ name: "pass", message: errors.pass });
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }

    catch (err) {
      alert(err);
    }

  }
  return (
    <div className="main-body">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={login}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="username" required className="form-control" id="username" placeholder="Username"

              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }} />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" required className="form-control" id="password" placeholder="*********"

              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }} />
          </div>
          {renderErrorMessage("uname")}
          {renderErrorMessage("pass")}
          <button className="btn" type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
      </div>
    </div>
  );

}

export default Login;
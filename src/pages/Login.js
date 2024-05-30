import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9003/login", user).then((res) => {
      alert(res.data.message);
      if (res.data.user) {
        navigate("/hoddash"); // Use navigate to go to the home page
      }
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <Link to="/register" className="button">
        Register
      </Link>
    </div>
  );
};

export default Login;

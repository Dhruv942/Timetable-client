import React, { useState } from "react";
import "../css/Register.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post("http://localhost:9000/register", user).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>

      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <Link to="/login" className="button">
        {" "}
        {/* Use Link to navigate to /login */}
        Login
      </Link>
    </div>
  );
};

export default Register;

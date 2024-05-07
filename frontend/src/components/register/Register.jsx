import "./register.css";

import React, { useRef } from "react";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    console.log("clciked");
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      console.log("pdont match");
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
      }
      try {
        await axios.post("/auth/register", user);
      } catch(err){
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerBox">
          <input
            placeholder="Username"
            className="registerEmail"
            ref={username}
            required
          ></input>
          <input
            placeholder="Email"
            className="registerEmail"
            type="email"
            ref={email}
            required
          ></input>
          <input
            placeholder="Password"
            className="registerPassword"
            type="password"
            ref={password}
            required
            min={6}
          ></input>
          <input
            placeholder="Re-Enter Password"
            className="registerPassword"
            type="password"
            ref={passwordAgain}
            required
          ></input>
          <button className="registerBtn" type="submit" onClick={handleClick}>
            Create Account
          </button>
          <a href="/login" className="loginSwitch">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}

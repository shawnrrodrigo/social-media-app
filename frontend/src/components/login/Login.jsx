import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">AllSocial</div>
          <div className="loginDesc">
            Connect with Friends and World around you with All Social
          </div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginEmail"
              required
              ref={email}
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="loginPassword"
              required
              minLength={6}
              ref={password}
            ></input>
            <button className="loginBtn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">
              <a
                href="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create a new Account
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

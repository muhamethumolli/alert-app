import React from "react";
import { Link } from "react-router-dom";
import { RegisterLoginWrapper } from "../components/Templates";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <RegisterLoginWrapper>
      <h1 className="register-form--heading">Sign In</h1>
      <LoginForm />
      <div className="line"></div>
      <Link to="/signup" className="btn-grey">
        Create a new account
      </Link>
    </RegisterLoginWrapper>
  );
};

export default Login;

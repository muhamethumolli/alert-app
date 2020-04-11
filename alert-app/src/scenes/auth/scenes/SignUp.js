import React from "react";
import { Link } from "react-router-dom";

import { RegisterLoginWrapper } from "../components/Templates";
import RegisterForm from "../components/RegisterForm";

const SignUp = () => {
  return (
    <RegisterLoginWrapper>
      <h1 className="register-form--heading">Sign up</h1>
      <RegisterForm />
      <div className="line"></div>
      <Link to="/" className="btn-grey">
        Already have an account? Log in
      </Link>
    </RegisterLoginWrapper>
  );
};

export default SignUp;

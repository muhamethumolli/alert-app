import React from "react";

const RegisterLoginWrapper = ({
  children,
  backgroundImg = "./assets/login-image-1.jpg",
}) => {
  return (
    <div className="register">
      <div
        className="register-img"
        style={{ backgroundImage: `url("${backgroundImg}")` }}
      ></div>
      <div className="register-form">{children || null}</div>
    </div>
  );
};

const Success = () => {
  return (
    <div class="msg-success">
      <p class="green-col">Success Register </p>
    </div>
  );
};

const Error = ({ message }) => {
  return (
    <div class="msg-error">
      <p class="red-col">{message} </p>
    </div>
  );
};
export { RegisterLoginWrapper, Success, Error };

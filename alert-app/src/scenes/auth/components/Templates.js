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

export { RegisterLoginWrapper };

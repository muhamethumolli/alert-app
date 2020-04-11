import React from "react";
const Input = ({
  children,
  styles = {},
  base = "input",
  extras = "",
  id,
  type = "text",
  placeholder,
  ...rest
}) => {
  return (
    <input
      {...rest}
      style={styles}
      className={`${base}  ${extras}`}
      id={id}
      type={type}
      placeholder={placeholder}
    >
      {children || null}
    </input>
  );
};
export default Input;

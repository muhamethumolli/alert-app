import React from "react";
import PropTypes from "prop-types";
const Button = ({ base = "btn-blue", extras, children, styles, ...rest }) => (
  <button {...rest} className={`${base} ${extras}`} style={styles}>
    {children || null}
  </button>
);
Button.propTypes = {
  styles: PropTypes.object,
  base: PropTypes.string,
  size: PropTypes.string,
  extras: PropTypes.string,
};
export default Button;

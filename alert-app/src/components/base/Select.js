import React from "react";
const Select = ({ id, type = "text", placeholder, data, ...rest }) => {
  return (
    <select {...rest} id={id}>
      <option value="0">Select:</option>
      {!!data &&
        data.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
    </select>
  );
};
export default Select;

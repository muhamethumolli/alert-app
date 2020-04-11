import React from "react";
import AlertTableItem from "./AlertTableItem";

const AlertTableBody = ({ data }) => {
  if (data.length === 0)
    return (
      <tbody>
        <tr>
          <td>No Alert</td>
        </tr>
      </tbody>
    );
  return (
    <tbody>
      {data.map((el) => (
        <AlertTableItem key={el.id} item={el} />
      ))}
    </tbody>
  );
};

export default AlertTableBody;

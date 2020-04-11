import React from "react";

const AlertTableItem = ({ item }) => {
  return (
    <tr>
      <td>{item.alert_event.name}</td>
      <td>{item.alert_method.name}</td>
      <td>{item.value}</td>
      <td>{item.created_at}</td>
    </tr>
  );
};

export default AlertTableItem;

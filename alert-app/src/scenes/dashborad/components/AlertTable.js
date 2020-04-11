import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AlertTableHead } from "./AlertTableHead";
import AlertTableBody from "./AlertTableBody";
import { alertGetStart } from "../actions/alert-actions";

const AlertTable = () => {
  const { data, loading, error } = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(alertGetStart());
  }, []);

  return (
    <div className="table-container">
      <div className="table">
        <table>
          <AlertTableHead />
          {!!data && <AlertTableBody data={data} />}
          <tfoot></tfoot>
        </table>
        {!!loading && <h1>...</h1>}
      </div>
    </div>
  );
};

export default AlertTable;

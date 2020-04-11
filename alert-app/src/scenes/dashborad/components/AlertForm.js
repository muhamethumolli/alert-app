import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import useForm from "../../../components/hooks/useForm";
import rules from "../helpers/alertRules";
import Select from "../../../components/base/Select";
import { eventStart } from "../actions/event-actions";
import { methodStart } from "../actions/method-actions";

const AlertForm = () => {
  const dispatch = useDispatch();
  const { event, method } = useSelector((state) => state);

  useLayoutEffect(() => {
    dispatch(methodStart());
    dispatch(eventStart());
  }, []);
  const submit = (_) => {
    console.log(formValues);
  };

  const { formValues, formErrors, handleSubmit, handleChange } = useForm(
    submit,
    rules,
    {}
  );
  return (
    <form className="form-modal">
      {/* <div className="msg-error">
      <p className="error-red-col">Error</p>
    </div> */}
      <div className="form-group_inline">
        <div className="form-group_inline--left">
          <label className="label" htmlFor="event">
            Event *
          </label>
          <Select
            id="alert_method_id"
            onChange={handleChange}
            data={event.data}
          />
          {!!formErrors.alert_method_id && (
            <p className="error-red-col">{formErrors.alert_method_id}</p>
          )}
        </div>

        <div className="form-group_inline--right">
          <label className="label" htmlFor="event">
            Method *
          </label>
          <Select
            id="alert_event_id"
            onChange={handleChange}
            data={method.data}
          />
          {!!formErrors.alert_event_id && (
            <p className="error-red-col">{formErrors.alert_event_id}</p>
          )}
        </div>
      </div>
      <div className="form-group m-t-20">
        <label className="label" htmlFor="value">
          Value *
        </label>
        <Input
          id="value"
          name="value"
          placeholder="Enter value"
          onChange={handleChange}
        />
        {!!formErrors.value && (
          <p className="error-red-col">{formErrors.value}</p>
        )}
      </div>
      <Button extras="m-t-20" type="submit" onClick={handleSubmit}>
        CREATE ALERT
      </Button>
    </form>
  );
};

export default AlertForm;

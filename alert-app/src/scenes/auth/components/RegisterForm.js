import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import useForm from "../../../components/hooks/useForm";
import rules from "../helpers/registerRules";
import { registerStart } from "../actions/auth-actions";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.register);

  const submit = (_) => {
    dispatch(registerStart(formValues));
  };

  const { formValues, formErrors, handleSubmit, handleChange } = useForm(
    submit,
    rules,
    {}
  );
  return (
    <form>
      {!!error && <p className="error-red-col">{"Wrong"}</p>}
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name *
        </label>
        <Input id="name" name="name" onChange={handleChange} />
        {!!formErrors.name && (
          <p className="error-red-col">{formErrors.name}</p>
        )}
      </div>

      <div className="form-group m-t-20">
        <label className="label" htmlFor="email">
          Email *
        </label>
        <Input id="email" name="email" type="email" onChange={handleChange} />
        {!!formErrors.email && (
          <p className="error-red-col">{formErrors.email}</p>
        )}
      </div>

      <div className="form-group m-t-20">
        <label className="label" htmlFor="password">
          Password *
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        {!!formErrors.password && (
          <p className="error-red-col">{formErrors.password}</p>
        )}
      </div>
      <Button extras="m-t-20" type="submit" onClick={handleSubmit}>
        SIGN UP
      </Button>
    </form>
  );
};

export default RegisterForm;

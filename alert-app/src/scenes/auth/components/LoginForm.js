import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import useForm from "../../../components/hooks/useForm";
import rules from "../helpers/loginRules";
import { loginStart } from "../actions/auth-actions";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.login);

  const submit = (_) => {
    dispatch(loginStart(formValues));
  };

  const { formValues, formErrors, handleSubmit, handleChange } = useForm(
    submit,
    rules,
    {}
  );
  return (
    <form>
      {!!error && <p className="error-red-col">{"Wrong"}</p>}
      <div className="form-group m-t-20">
        <label className="label" htmlFor="email">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Your email"
        />
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
          placeholder="Your password"
        />
        {!!formErrors.password && (
          <p className="error-red-col">{formErrors.password}</p>
        )}
      </div>

      <Button extras="m-t-20" type="submit" onClick={handleSubmit}>
        SIGN IN
      </Button>
    </form>
  );
};

import { useState, useEffect } from "react";

const useForm = (
  formCallback,
  formValidators,
  initialValues = {},
  limits = {},
  exceptions = []
) => {
  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  // callback effect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitStatus) formCallback();
  }, [formErrors]);

  // handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    setFromErrors(formValidators(formValues, exceptions, limits));
    setSubmitStatus(true);
  };

  const handleEventlessSubmit = (_) => {
    setFromErrors(formValidators(formValues, exceptions, limits));
    setSubmitStatus(true);
  };

  const handleChange = (event) => {
    event.persist();
    setFromValues({ ...formValues, [event.target.id]: event.target.value });
  };
  const handleClearError = (name) => {
    const errors = { ...formErrors };
    delete errors[name];
    setSubmitStatus(false);
    setFromErrors(errors);
  };

  return {
    formValues,
    formErrors,
    handleEventlessSubmit,
    handleSubmit,
    handleChange,
    handleClearError,
  };
};

export default useForm;

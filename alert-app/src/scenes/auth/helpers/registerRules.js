export default function rules(values, excludor, limiter) {
  let errors = {};
  if (!values.name) errors.name = "This Field is required";
  if (!values.email) errors.email = "This Field is required";
  if (!values.password) errors.password = "This Field is required";

  return errors;
}

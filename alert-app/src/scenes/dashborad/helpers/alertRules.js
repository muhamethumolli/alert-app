export default function rules(values, excludor, limiter) {
  let errors = {};
  if (!values.alert_method_id)
    errors.alert_method_id = "This Field is required";
  if (!values.alert_event_id) errors.alert_event_id = "This Field is required";
  if (!values.value) errors.value = "This Field is required";

  return errors;
}

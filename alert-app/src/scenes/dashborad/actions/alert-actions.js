import { alertConstants } from "../constants/alert-constants";
//user Actions
export const alertGetStart = () => {
  return { type: alertConstants.ALERT_GET_REQUEST };
};
export const alertGetSuccess = (data) => {
  return { type: alertConstants.ALERT_GET_SUCCESS, payload: data };
};
export const alertGetError = (error) => {
  return { type: alertConstants.ALERT_GET_FAILURE, payload: error };
};

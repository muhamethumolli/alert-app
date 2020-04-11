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

export const alertCreateStart = (data) => {
  return { type: alertConstants.ALERT_CREATE_REQUEST, payload: data };
};
export const alertCreateSuccess = (data) => {
  return { type: alertConstants.ALERT_CREATE_SUCCESS, payload: data };
};
export const alertCreateError = (error) => {
  return { type: alertConstants.ALERT_CREATE_FAILURE, payload: error };
};

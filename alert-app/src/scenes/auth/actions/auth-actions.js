import { authConstants } from "../constants";
//Sign In Actions
export const loginStart = (data) => {
  return { type: authConstants.LOGIN_REQUEST, payload: data };
};
export const loginSuccess = (data) => {
  return { type: authConstants.LOGIN_SUCCESS, payload: data };
};
export const loginError = (error) => {
  return { type: authConstants.LOGIN_FAILURE, payload: error };
};
//Sign Up Actions
export const registerStart = (data) => {
  return { type: authConstants.REGISTER_REQUEST, payload: data };
};
export const registerSuccess = (data) => {
  return { type: authConstants.REGISTER_SUCCESS, payload: data };
};
export const registerError = (error) => {
  return { type: authConstants.REGISTER_FAILURE, payload: error };
};

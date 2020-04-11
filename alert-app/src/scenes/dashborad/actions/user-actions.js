import { userConstants } from "../constants/user-constants";
//user Actions
export const userStart = () => {
  return { type: userConstants.USER_GET_REQUEST };
};
export const userSuccess = (data) => {
  return { type: userConstants.USER_GET_SUCCESS, payload: data };
};
export const userError = (error) => {
  return { type: userConstants.USER_GET_FAILURE, payload: error };
};

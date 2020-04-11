import { methodConstants } from "../constants/method-constants";
export const methodStart = () => {
  return { type: methodConstants.METHOD_GET_REQUEST };
};
export const methodSuccess = (data) => {
  return { type: methodConstants.METHOD_GET_SUCCESS, payload: data };
};
export const methodError = (error) => {
  return { type: methodConstants.METHOD_GET_FAILURE, payload: error };
};

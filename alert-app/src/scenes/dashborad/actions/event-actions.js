import { eventConstants } from "../constants/event-constants";
export const eventStart = () => {
  return { type: eventConstants.EVENT_GET_REQUEST };
};
export const eventSuccess = (data) => {
  return { type: eventConstants.EVENT_GET_SUCCESS, payload: data };
};
export const eventError = (error) => {
  return { type: eventConstants.EVENT_GET_FAILURE, payload: error };
};

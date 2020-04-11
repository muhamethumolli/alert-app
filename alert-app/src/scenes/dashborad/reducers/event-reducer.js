import { eventConstants } from "../constants/event-constants";
export const event = (state = {}, { payload, type }) => {
  switch (type) {
    case eventConstants.EVENT_GET_REQUEST:
      return { loading: true };
    case eventConstants.EVENT_GET_SUCCESS:
      return { data: payload };
    case eventConstants.EVENT_GET_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

import { alertConstants } from "../constants/alert-constants";
export const alert = (state = {}, { payload, type }) => {
  switch (type) {
    case alertConstants.ALERT_GET_REQUEST:
      return { loading: true };
    case alertConstants.ALERT_GET_SUCCESS:
      return { data: payload };
    case alertConstants.ALERT_GET_FAILURE:
      return { error: payload };
    case alertConstants.ALERT_CREATE_SUCCESS:
      return { data: [...state.data, ...payload] };
    case alertConstants.ALERT_GET_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

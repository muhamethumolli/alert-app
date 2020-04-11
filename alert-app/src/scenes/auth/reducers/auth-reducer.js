import { authConstants } from "../constants";

export const register = (state = {}, { payload, type }) => {
  switch (type) {
    case authConstants.REGISTER_REQUEST:
      return { loading: true };
    case authConstants.REGISTER_SUCCESS:
      return { data: payload };
    case authConstants.REGISTER_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

export const login = (state = {}, { payload, type }) => {
  switch (type) {
    case authConstants.LOGIN_REQUEST:
      return { loading: true };
    case authConstants.LOGIN_SUCCESS:
      return { data: payload };
    case authConstants.LOGIN_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

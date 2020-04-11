import { userConstants } from "../constants/user-constants";
export const user = (state = {}, { payload, type }) => {
  switch (type) {
    case userConstants.USER_GET_REQUEST:
      return { loading: true };
    case userConstants.USER_GET_SUCCESS:
      return { data: payload };
    case userConstants.USER_GET_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

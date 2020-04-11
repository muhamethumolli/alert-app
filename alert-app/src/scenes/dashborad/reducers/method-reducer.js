import { methodConstants } from "../constants/method-constants";
export const method = (state = {}, { payload, type }) => {
  switch (type) {
    case methodConstants.METHOD_GET_REQUEST:
      return { loading: true };
    case methodConstants.METHOD_GET_SUCCESS:
      return { data: payload };
    case methodConstants.METHOD_GET_FAILURE:
      return { error: payload };
    default:
      return state;
  }
};

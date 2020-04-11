import { takeLatest, put } from "redux-saga/effects";
import { userConstants } from "../constants/user-constants";
import { getUserToken } from "../../../helpers/web-storage-controller";
import axios from "axios";

import { userSuccess, userError } from "../actions/user-actions";

export function* getUser() {
  try {
    const res = yield axios.get(" https://alert-api.ornio.xyz/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${getUserToken()}`,
      },
    });
    yield put(userSuccess(res.data));
  } catch (error) {
    yield put(userError(error));
  }
}

export function* userWatcher() {
  yield takeLatest(userConstants.USER_GET_REQUEST, getUser);
}

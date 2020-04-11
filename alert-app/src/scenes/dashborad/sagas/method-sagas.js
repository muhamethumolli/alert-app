import { takeLatest, put } from "redux-saga/effects";
import { methodConstants } from "../constants/method-constants";
import { getUserToken } from "../../../helpers/web-storage-controller";
import axios from "axios";

import { methodSuccess, methodError } from "../actions/method-actions";

export function* getMethod() {
  try {
    const res = yield axios.get("http://alert-api.local/api/alert-methods", {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${getUserToken()}`,
      },
    });
    yield put(methodSuccess(res.data));
  } catch (error) {
    yield put(methodError(error));
  }
}

export function* methodWatcher() {
  yield takeLatest(methodConstants.METHOD_GET_REQUEST, getMethod);
}

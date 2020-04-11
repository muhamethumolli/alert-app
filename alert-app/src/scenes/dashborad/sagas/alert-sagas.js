import { takeLatest, put } from "redux-saga/effects";
import { alertConstants } from "../constants/alert-constants";
import { getUserToken } from "../../../helpers/web-storage-controller";
import axios from "axios";

import { alertGetSuccess, alertGetError } from "../actions/alert-actions";

export function* getAlert() {
  try {
    const res = yield axios.get("https://alert-api.ornio.xyz/api/alerts", {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${getUserToken()}`,
      },
    });
    yield put(alertGetSuccess(res.data));
  } catch (error) {
    yield put(alertGetError(error));
  }
}

export function* alertWatcher() {
  yield takeLatest(alertConstants.ALERT_GET_REQUEST, getAlert);
}

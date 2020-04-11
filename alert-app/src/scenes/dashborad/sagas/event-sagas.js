import { takeLatest, put } from "redux-saga/effects";
import { eventConstants } from "../constants/event-constants";
import { getUserToken } from "../../../helpers/web-storage-controller";
import axios from "axios";

import { eventSuccess, eventError } from "../actions/event-actions";

export function* getEvent() {
  try {
    const res = yield axios.get(
      "https://alert-api.ornio.xyz/api/alert-events",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${getUserToken()}`,
        },
      }
    );
    yield put(eventSuccess(res.data));
  } catch (error) {
    yield put(eventError(error));
  }
}

export function* eventWatcher() {
  yield takeLatest(eventConstants.EVENT_GET_REQUEST, getEvent);
}

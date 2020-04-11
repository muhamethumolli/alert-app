import { takeLatest, put } from "redux-saga/effects";
import { authConstants } from "../constants";
import { history } from "../../../helpers";
import { setUser } from "../../../helpers/web-storage-controller";
import axios from "axios";

import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from "../actions/auth-actions";

export function* signIn({ payload }) {
  try {
    const res = yield axios.post(
      "https://alert-api.ornio.xyz/api/auth/login",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    setUser(res.data.token);
    yield put(loginSuccess(res.data));
    yield history.push("/dashboard");
  } catch (error) {
    yield put(loginError(error));
  }
}

export function* signUp({ payload }) {
  try {
    const res = yield axios.post(
      "https://alert-api.ornio.xyz/api/users",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    yield put(registerSuccess(res.data));
  } catch (error) {
    yield put(registerError(error));
  }
}

export function* authWatcher() {
  yield takeLatest(authConstants.LOGIN_REQUEST, signIn);
  yield takeLatest(authConstants.REGISTER_REQUEST, signUp);
}

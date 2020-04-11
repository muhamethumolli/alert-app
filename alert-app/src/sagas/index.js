import { all, call } from "redux-saga/effects";
import { authWatcher } from "../scenes/auth/sagas/auth-sagas";

const sagas = [call(authWatcher)];

export function* root() {
  yield all(sagas);
}

import { all, call } from "redux-saga/effects";
import { authWatcher } from "../scenes/auth/sagas/auth-sagas";
import { userWatcher } from "../scenes/dashborad/sagas/user-sagas";
import { alertWatcher } from "../scenes/dashborad/sagas/alert-sagas";

const sagas = [call(authWatcher), call(userWatcher), call(alertWatcher)];

export function* root() {
  yield all(sagas);
}

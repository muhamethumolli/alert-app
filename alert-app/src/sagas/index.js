import { all, call } from "redux-saga/effects";
import { authWatcher } from "../scenes/auth/sagas/auth-sagas";
import { userWatcher } from "../scenes/dashborad/sagas/user-sagas";

const sagas = [call(authWatcher), call(userWatcher)];

export function* root() {
  yield all(sagas);
}

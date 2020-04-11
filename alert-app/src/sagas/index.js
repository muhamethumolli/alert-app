import { all, call } from "redux-saga/effects";
import { authWatcher } from "../scenes/auth/sagas/auth-sagas";
import { userWatcher } from "../scenes/dashborad/sagas/user-sagas";
import { alertWatcher } from "../scenes/dashborad/sagas/alert-sagas";
import { methodWatcher } from "../scenes/dashborad/sagas/method-sagas";
import { eventWatcher } from "../scenes/dashborad/sagas/event-sagas";

const sagas = [
  call(authWatcher),
  call(userWatcher),
  call(alertWatcher),
  call(methodWatcher),
  call(eventWatcher),
];

export function* root() {
  yield all(sagas);
}

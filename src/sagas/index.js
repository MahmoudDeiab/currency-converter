import { all, fork } from "redux-saga/effects";
import { watchRatesActions } from "./ratesSaga";

export default function* root() {
  yield all([fork(watchRatesActions)]);
}

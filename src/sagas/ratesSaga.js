import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  FETCH_EXCHANGE_RATES,
  replaceExchangeRates,
  toggleIsFetching
} from "../actions/ratesActions";
import { getFetchExchangeRatesRequestUrl } from "../api/endpoints";
import { SUPPORTED_CURRENCIES } from "../constants";

function* requestCurrencyExchangeRate(currency) {
  const url = getFetchExchangeRatesRequestUrl(currency);
  try {
    const response = yield call(fetch, url);
    const data = yield response.json();
    return {
      error: null,
      data
    };
  } catch (error) {
    console.log("Error", error.message);
    return {
      error,
      data: null
    };
  }
}

function constructExchangeMap(responses) {
  const map = {};
  responses.forEach(({ data }) => (map[data.base] = data.rates));
  return map;
}

function* handleFetchExchangeRatesActions() {
  yield put(toggleIsFetching());
  const responses = yield all(
    Object.values(SUPPORTED_CURRENCIES).map(currency =>
      call(requestCurrencyExchangeRate, currency)
    )
  );
  if (responses.every(({ error }) => !error)) {
    const exchangeMap = constructExchangeMap(responses);
    yield put(replaceExchangeRates(exchangeMap));
  }
  yield put(toggleIsFetching());
}

export function* watchRatesActions() {
  yield takeLatest(FETCH_EXCHANGE_RATES, handleFetchExchangeRatesActions);
}

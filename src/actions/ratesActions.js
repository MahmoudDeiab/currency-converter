export const FETCH_EXCHANGE_RATES = "FETCH_EXCHANGE_RATES";

export const REPLACE_EXCHANGE_RATES = "REPLACE_EXCHANGE_RATES";

export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const fetchExchangeRates = () => ({ type: FETCH_EXCHANGE_RATES });

export const replaceExchangeRates = (exchangeRatesMap, timeStamp) => ({
  type: REPLACE_EXCHANGE_RATES,
  exchangeRatesMap,
  timeStamp
});

export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING });

import { createSelector } from "reselect";
import { getExchangeRatesMap } from "../Rates/ratesSelecotr";
import { isEmpty } from "ramda";

export const getFromCurrency = state => state.converter.fromCurrency;

export const getToCurrency = state => state.converter.toCurrency;

export const getAmount = state => state.converter.amount;

const getExchangeRateValue = createSelector(
  getExchangeRatesMap,
  getFromCurrency,
  getToCurrency,
  (exchangeRatesMap, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) {
      return 1;
    }
    if (!isEmpty(exchangeRatesMap)) {
      return exchangeRatesMap[fromCurrency][toCurrency] || 0;
    }
    return 0;
  }
);

export const getConvertedAmount = createSelector(
  getAmount,
  getExchangeRateValue,
  (amount, exchangeRateValue) => amount * exchangeRateValue
);

export const SET_CURRENCY = "SET_CURRENCY";
export const SWITCH_CURRENCIES = "SWITCH_CURRENCIES";
export const SET_AMOUNT = "SET_AMOUNT";

export const setCurrency = (keyName, currencyToSet) => ({
  type: SET_CURRENCY,
  keyName,
  currencyToSet
});

export const switchCurrencies = () => ({
  type: SWITCH_CURRENCIES
});

export const setAmount = amount => ({
  type: SET_AMOUNT,
  amount
});

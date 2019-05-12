import { SUPPORTED_CURRENCIES } from "../../constants";
import {
  SET_CURRENCY,
  SWITCH_CURRENCIES,
  SET_AMOUNT
} from "../../actions/converterActions";
import { objOf, merge } from "ramda";

const defaultState = {
  fromCurrency: SUPPORTED_CURRENCIES.EUR,
  toCurrency: SUPPORTED_CURRENCIES.USD,
  amount: 1
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENCY: {
      const { keyName, currencyToSet } = action;
      const newCurrency = objOf(keyName, currencyToSet);
      return merge(state, newCurrency);
    }

    case SWITCH_CURRENCIES: {
      return {
        ...state,
        fromCurrency: state.toCurrency,
        toCurrency: state.fromCurrency
      };
    }

    case SET_AMOUNT: {
      const { amount } = action;
      return {
        ...state,
        amount
      };
    }

    default:
      return state;
  }
}

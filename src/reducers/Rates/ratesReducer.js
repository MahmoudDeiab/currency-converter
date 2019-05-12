import {
  REPLACE_EXCHANGE_RATES,
  TOGGLE_IS_FETCHING
} from "../../actions/ratesActions";

const defaultState = {
  rates: {},
  isFetching: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case REPLACE_EXCHANGE_RATES: {
      const { exchangeRatesMap } = action;
      return {
        ...state,
        rates: exchangeRatesMap
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
      };
    }

    default:
      return state;
  }
}

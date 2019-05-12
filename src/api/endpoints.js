import { getSymbolsToLoad } from "../utils";

export const getFetchExchangeRatesRequestUrl = currency => {
  const symbolsToLoad = getSymbolsToLoad(currency);
  return `https://api.exchangeratesapi.io/latest?base=${currency}&symbols=${symbolsToLoad}`;
};

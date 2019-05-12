import { SUPPORTED_CURRENCIES } from "../constants";
import JapanFlag from "../assets/icons/japan_flag.svg";
import USAFlag from "../assets/icons/usa_flag.svg";
import EuroFlag from "../assets/icons/europe_flag.svg";

export const getSymbolsToLoad = currency => {
  switch (currency) {
    case SUPPORTED_CURRENCIES.EUR:
      return `USD,JPY`;

    case SUPPORTED_CURRENCIES.USD:
      return `EUR,JPY`;

    case SUPPORTED_CURRENCIES.JPY:
      return `EUR,USD`;

    default:
      return `USD,JPY`;
  }
};

export const getCurrencyFlagIconSrc = currency => {
  switch (currency) {
    case SUPPORTED_CURRENCIES.EUR:
      return EuroFlag;

    case SUPPORTED_CURRENCIES.USD:
      return USAFlag;

    case SUPPORTED_CURRENCIES.JPY:
      return JapanFlag;

    default:
      return null;
  }
};

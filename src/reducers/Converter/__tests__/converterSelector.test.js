import {
  getFromCurrency,
  getToCurrency,
  getAmount,
  getConvertedAmount
} from "../converterSelector";
import { type, includes } from "ramda";
import { SUPPORTED_CURRENCIES } from "../../../constants";

const generateState = (amount, fromCurrency, toCurrency) => {
  return {
    rates: {
      rates: {
        EUR: {
          USD: 1.123,
          JPY: 123.25
        },
        USD: {
          JPY: 109.750667854,
          EUR: 0.8904719501
        },
        JPY: {
          USD: 0.0091115619,
          EUR: 0.0081135903
        }
      },
      isFetching: false
    },
    converter: {
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      amount: amount
    }
  };
};

const runTests = (
  inputAmount,
  expectedConversionAmount,
  inputFromCurrency,
  inputToCurrency
) => {
  const state = generateState(inputAmount, inputFromCurrency, inputToCurrency);

  describe("Converter Selector", () => {
    const fromCurrency = getFromCurrency(state);
    const toCurrency = getToCurrency(state);
    const amount = getAmount(state);
    const convertedAmount = getConvertedAmount(state);

    describe("getFromCurrency and getToCurrency", () => {
      it("Always retun a string", () => {
        expect(type(fromCurrency)).toEqual("String");
        expect(type(toCurrency)).toEqual("String");
      });

      it("Return either EUR, USD or JPY", () => {
        expect(
          includes(fromCurrency, Object.values(SUPPORTED_CURRENCIES))
        ).toEqual(true);
        expect(
          includes(toCurrency, Object.values(SUPPORTED_CURRENCIES))
        ).toEqual(true);
      });
    });

    describe("getConvertedAmount", () => {
      it("Calculates the converted amount", () => {
        expect(convertedAmount).toEqual(expectedConversionAmount);
      });

      it("Returns converted amount as is, if the two currencies are the same", () => {
        if (fromCurrency === toCurrency) {
          expect(amount).toEqual(convertedAmount);
        }
      });
    });
  });
};

runTests(1, 1, "EUR", "EUR");
runTests(2, 2.246, "EUR", "USD");

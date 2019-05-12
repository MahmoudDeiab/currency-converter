import React, { PureComponent } from "react";
import { fetchExchangeRates } from "./actions/ratesActions";
import { connect } from "react-redux";
import CurrencyConverter from "./components/CurrencyConverter";
import Result from "./components/Result";
import Header from "./components/Header";
import {
  getAmount,
  getFromCurrency,
  getToCurrency,
  getConvertedAmount
} from "./reducers/Converter/converterSelector";
import { getIsFetching } from "./reducers/Rates/ratesSelecotr";

class App extends PureComponent {
  componentDidMount() {
    this.handleFetchExchangeRates();
  }

  handleFetchExchangeRates = () => {
    const { fetchExchangeRates } = this.props;
    fetchExchangeRates();
  };

  render() {
    const {
      amount,
      convertedAmount,
      fromCurrency,
      toCurrency,
      isFetching
    } = this.props;
    return (
      <div className="app">
        <div className="main-wrapper">
          <Header
            onReload={this.handleFetchExchangeRates}
            isFetching={isFetching}
          />
          <CurrencyConverter
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
          <Result
            amount={amount}
            convertedAmount={convertedAmount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: getAmount(state),
  convertedAmount: getConvertedAmount(state),
  fromCurrency: getFromCurrency(state),
  toCurrency: getToCurrency(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
  fetchExchangeRates: () => dispatch(fetchExchangeRates())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

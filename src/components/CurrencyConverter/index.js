import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CurrencySelect from "../CurrencySelect";
import IconButton from "../IconButton";
import AmountInput from "../AmountInput";
import {
  setCurrency,
  switchCurrencies,
  setAmount
} from "../../actions/converterActions";
import ExchangeArrow from "../../assets/icons/exchange_arrow.svg";
import "./index.css";

class CurrencyConverter extends PureComponent {
  handleCurrencyChange = (keyName, currencyToSet) => {
    const { setCurrency } = this.props;
    setCurrency(keyName, currencyToSet);
  };

  handleSwitchCurrencies = () => {
    const { switchCurrencies } = this.props;
    switchCurrencies();
  };

  handleSetAmount = amount => {
    const { setAmount } = this.props;
    setAmount(amount);
  };

  render() {
    const { fromCurrency, toCurrency, amount } = this.props;
    return (
      <div className="actions-wrapper">
        <AmountInput value={amount} onChange={this.handleSetAmount} />
        <div className="select-input-container">
          <CurrencySelect
            onChange={this.handleCurrencyChange}
            keyName="fromCurrency"
            label="From"
            value={fromCurrency}
          />
        </div>
        <IconButton
          iconSrc={ExchangeArrow}
          onClick={this.handleSwitchCurrencies}
          label="Switch"
          extraClassName="-btn-outline"
          isLoading={false}
        />
        <div className="select-input-container">
          <CurrencySelect
            onChange={this.handleCurrencyChange}
            keyName="toCurrency"
            label="To"
            value={toCurrency}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrency: (keyName, currencyToSet) =>
    dispatch(setCurrency(keyName, currencyToSet)),
  switchCurrencies: () => dispatch(switchCurrencies()),
  setAmount: amount => dispatch(setAmount(amount))
});

export default connect(
  null,
  mapDispatchToProps
)(CurrencyConverter);

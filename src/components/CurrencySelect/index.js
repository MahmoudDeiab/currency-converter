import React from "react";
import Select from "react-select";
import { supportedCurrencyOptions } from "../../constants";
import { getCurrencyFlagIconSrc } from "../../utils";
import { find, propEq } from "ramda";
import "./index.css";

const customSingleValue = ({ data }) => {
  const iconSrc = getCurrencyFlagIconSrc(data.value);
  return (
    <div className="input-select">
      <div className="input-select__single-value input-select-container">
        <span className="input-select__icon">
          <img alt="" className="select-icon" src={iconSrc} />
        </span>
        <span>{data.label}</span>
      </div>
    </div>
  );
};

const CurrencySelect = ({ keyName, label, onChange, value }) => {
  return (
    <div>
      <p className="form-label">{label}</p>
      <Select
        onChange={({ value }) => onChange(keyName, value)}
        options={supportedCurrencyOptions}
        value={find(propEq("value", value), supportedCurrencyOptions)}
        components={{ SingleValue: customSingleValue }}
      />
    </div>
  );
};

export default CurrencySelect;

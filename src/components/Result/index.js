import React from "react";
import "./index.css";

const Result = ({ amount, convertedAmount, fromCurrency, toCurrency }) => {
  if (amount === "") {
    return null;
  }
  return (
    <div className="result-wrapper">
      <span>{`${amount} ${fromCurrency}`}</span>
      <span> is equal to </span>
      <span>{`${convertedAmount.toFixed(2)} ${toCurrency}`}</span>
    </div>
  );
};

export default Result;

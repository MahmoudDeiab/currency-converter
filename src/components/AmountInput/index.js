import React from "react";
import "./index.css";

const AmountInput = ({ value, onChange }) => {
  return (
    <div>
      <p className="">Amount</p>
      <input
        className="input-field"
        onChange={event => {
          if (!isNaN(event.target.value)) {
            onChange(event.target.value);
          }
        }}
        value={value}
      />
    </div>
  );
};

export default AmountInput;

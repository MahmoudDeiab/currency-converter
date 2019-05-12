import React from "react";
import { PulseLoader } from "react-spinners";
import "./index.css";

const IconButton = ({ iconSrc, label, onClick, extraClassName, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className={`icon-btn ${extraClassName && `${extraClassName}`}`}
    >
      {isLoading ? (
        <PulseLoader sizeUnit={"px"} size={10} color={"#fff"} loading={true} />
      ) : (
        <div className="icon-btn-content-container">
          <img alt="" className="icon-btn-icon" src={iconSrc} />
          <span>{label}</span>
        </div>
      )}
    </button>
  );
};

export default IconButton;

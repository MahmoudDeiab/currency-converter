import React from "react";
import IconButton from "../IconButton";
import ReloadArrowIcon from "../../assets/icons/reload_arrow.svg";
import "./index.css";

const Header = ({ isFetching, onReload }) => {
  return (
    <div className="header-wrapper">
      <h1 className="header-label">Currency Converter</h1>
      <IconButton
        label="Reload Rates"
        onClick={onReload}
        iconSrc={ReloadArrowIcon}
        extraClassName="-btn-fill"
        isLoading={isFetching}
      />
    </div>
  );
};

export default Header;

import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import uk from "../../../data/uk.png";
import germany from "../../../data/germany.png";
import france from "../../../data/france.png";

const LanguageCurrencyChange = ({
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          <img src={currentLanguageCode === "en" ? uk : currentLanguageCode === "fn" ? france : germany} alt="" />
          {" "}
          {currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "fn"
              ? "French"
              : currentLanguageCode === "de"
                ? "Germany"
                : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                <img src={uk} alt="" />{" "}English
              </button>
            </li>
            <li>
              <button value="fn" onClick={e => changeLanguageTrigger(e)}>
                <img src={france} alt="" />{" "}French
              </button>
            </li>
            <li>
              <button value="de" onClick={e => changeLanguageTrigger(e)}>
                <img src={germany} alt="" />{" "}Germany
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LanguageCurrencyChange.propTypes = {
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChange;

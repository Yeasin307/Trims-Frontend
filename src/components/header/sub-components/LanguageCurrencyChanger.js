import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import uk from "../../../data/uk.png";
import germany from "../../../data/germany.png";
import france from "../../../data/france.png";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  // const setCurrencyTrigger = e => {
  //   const currencyName = e.target.value;
  //   setCurrency(currencyName);
  // };

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
      {/* <div className="same-language-currency use-style">
        <span>
          {currency.currencyName} <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="GBP" onClick={e => setCurrencyTrigger(e)}>
                GBP
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="same-language-currency">
        <CallIcon fontSize="large" sx={{ color: 'blueViolet' }} />
        <div style={{ marginLeft: '10px' }}>
          <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>Call Us</h5>
          <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>+880-1911112222</h5>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="same-language-currency">
        <MailOutlineIcon fontSize="large" sx={{ color: 'blueViolet' }} />
        <div style={{ marginLeft: '10px' }}>
          <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>Email Us</h5>
          <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>Info.trimtexbd@gmail.com</h5>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="same-language-currency">
        <LocationOnOutlinedIcon fontSize="large" sx={{ color: 'blueViolet' }} />
        <div style={{ marginLeft: '10px' }}>
          <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>Our Location</h5>
          <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>Dhaka</h5>
        </div>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;

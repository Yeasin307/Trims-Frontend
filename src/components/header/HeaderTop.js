import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import { setCurrency } from "../../redux/actions/currencyActions";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const HeaderTop = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch,
  borderStyle
}) => {
  return (
    <div className="row">

      <div className="col-lg-2">
        <div
          className={`header-top-wap ${borderStyle === "fluid-border" ? "border-bottom" : ""
            }`}
        >
          <LanguageCurrencyChanger
            currency={currency}
            setCurrency={setCurrency}
            currentLanguageCode={currentLanguageCode}
            dispatch={dispatch}
          />
        </div>
      </div>

      <div className="col-lg-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="same-language-currency">
          <CallIcon fontSize="large" sx={{ color: 'blueViolet' }} />
          <div style={{ marginLeft: '10px' }}>
            <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>Call Us</h5>
            <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>+880-1911112222</h5>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '72px', paddingRight: '72px' }} className="same-language-currency">
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

    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currencyName => {
      dispatch(setCurrency(currencyName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderTop));

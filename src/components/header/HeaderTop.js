import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";

const HeaderTop = ({
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
            <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>Info@trimtex-bd.com</h5>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="same-language-currency">
          <LocationOnOutlinedIcon fontSize="large" sx={{ color: 'blueViolet' }} />
          <div style={{ marginLeft: '10px' }}>
            <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>Our Location</h5>
            <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>Mirpur-12, Dhaka</h5>
          </div>
        </div>

      </div>

    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default multilanguage(HeaderTop);

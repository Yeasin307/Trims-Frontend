import PropTypes from "prop-types";
import React from "react";

const HeaderContact = ({
  Icon,
  title,
  titleValue
}) => {
  return (
    <div className="same-language-currency d-flex justify-content-center align-items-center px-5">
      <Icon fontSize="large" sx={{ color: 'blueViolet' }} />
      <div style={{ marginLeft: '10px' }}>
        <h5 style={{ marginBottom: '0px', fontWeight: 'bold', color: 'blueViolet' }}>{title}</h5>
        <h5 style={{ marginBottom: '0px', fontFamily: 'Arial' }}>{titleValue}</h5>
      </div>
    </div>
  );
};

HeaderContact.propTypes = {
  Icon: PropTypes.element,
  title: PropTypes.string,
  titleValue: PropTypes.string
};

export default HeaderContact;

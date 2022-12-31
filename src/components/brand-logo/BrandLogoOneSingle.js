// container
import PropTypes from "prop-types";
import React from "react";

const BrandLogoOneSingle = ({ data, sliderClassName, spaceBottomClass }) => {

  return (
    <div
      className={`single-brand-logo ${sliderClassName ? sliderClassName : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <img src={process.env.REACT_APP_SERVER_API + "/static/components/" + data} alt="" />
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  data: PropTypes.string,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default BrandLogoOneSingle;

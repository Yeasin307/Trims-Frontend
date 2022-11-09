import PropTypes from "prop-types";
import React from "react";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <FeatureIconSingle />
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;

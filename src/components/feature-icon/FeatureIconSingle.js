import PropTypes from "prop-types";
import React from "react";

const FeatureIconSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-md-4">
      <div
        className={`support-wrap-6 support-shape ${spaceBottomClass ? spaceBottomClass : ""
          } ${textAlignClass ? textAlignClass : ""}`}
      >
        <div className="support-content-6">
          <img src={process.env.PUBLIC_URL + data.image} alt="Feature Icon" />
          <h5>{data.title}</h5>
          <p style={{ textAlign: 'justify' }}>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconSingle;

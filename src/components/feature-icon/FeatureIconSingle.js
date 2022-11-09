import PropTypes from "prop-types";
import React from "react";
import featuredIcon from "../../data/featured-icon.png";

const FeatureIconSingle = () => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="support-wrap mb-30">
        <div className="support-icon">
          <img
            className="animated"
            src={featuredIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  singleFeature: PropTypes.object
};

export default FeatureIconSingle;

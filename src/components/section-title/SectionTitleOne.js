import PropTypes from "prop-types";
import React from "react";

const SectionTitleOne = ({
  titleText,
  subtitleText,
  subtitleColorClass,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div
      className={`section-title mb-100 mt-50 ${positionClass ? positionClass : ""} ${spaceClass ? spaceClass : ""
        } ${borderClass ? borderClass : ""}`}
    >
      <h2>{titleText}</h2>
      <p className={subtitleColorClass ? subtitleColorClass : ""}>
        {subtitleText}
      </p>
    </div>
  );
};

SectionTitleOne.propTypes = {
  borderClass: PropTypes.string,
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subtitleText: PropTypes.string,
  subtitleColorClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleOne;

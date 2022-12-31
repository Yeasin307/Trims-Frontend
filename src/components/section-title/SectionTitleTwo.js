// container
import PropTypes from "prop-types";
import React from "react";

const SectionTitleTwo = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div
      className={`section-title-2 ${positionClass ? positionClass : ""} ${spaceClass ? spaceClass : ""
        }`}
    >
      {titleText && <div dangerouslySetInnerHTML={{ __html: `${titleText}` }} />}
      {subTitleText && <div dangerouslySetInnerHTML={{ __html: `${subTitleText}` }} />}
    </div>
  );
};

SectionTitleTwo.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subTitleText: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleTwo;

import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const { about } = useSelector((state) => state.componentData);

  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          {about?.subtitle && <div dangerouslySetInnerHTML={{ __html: `${about?.subtitle}` }} />}
          {about?.title && <div dangerouslySetInnerHTML={{ __html: `${about?.title}` }} />}
          {about?.description && <div dangerouslySetInnerHTML={{ __html: `${about?.description}` }} />}
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;

import PropTypes from "prop-types";
import React from "react";

const TextGridOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-mission ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        {data?.title && <div dangerouslySetInnerHTML={{ __html: `${data?.title}` }} />}
        {data?.description && <div dangerouslySetInnerHTML={{ __html: `${data?.description}` }} />}
      </div>
    </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default TextGridOneSingle;

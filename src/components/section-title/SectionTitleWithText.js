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
          <div className="row">
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src={`https://server.asdfashionbd.com/static/components/${about.image}`}
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6" >
              {about?.description &&
                <div
                  style={{ textAlign: 'justify' }}
                  dangerouslySetInnerHTML={{ __html: `${about?.description}` }}
                />
              }
            </div>
          </div>
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

import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import { getAbout } from "../../redux/actions/componentActions";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const { about } = useSelector((state) => state.componentData);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px",
    triggerOnce: true
  });

  useEffect(() => {
    inView && dispatch(getAbout());
  }, [dispatch, inView])

  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="welcome-content text-center">
          {about?.subtitle && <div dangerouslySetInnerHTML={{ __html: `${about?.subtitle}` }} />}
          {about?.title && <div dangerouslySetInnerHTML={{ __html: `${about?.title}` }} />}
          <div className="row">
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src={process.env.REACT_APP_SERVER_API + "/static/components/" + about?.image}
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

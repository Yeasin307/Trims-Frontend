import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import { getAbout } from "../../redux/actions/componentActions";
import { useIsOverflow } from "../../hooks/useIsOverflow.js";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const [readMore, setReadMore] = useState(false);
  const { about } = useSelector((state) => state.componentData);
  const reference = useRef();
  let isOverflow = useIsOverflow(reference, (isOverflowFromCallback) => {
    isOverflow = isOverflowFromCallback;
  });
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
            <div className="col-sm-12 col-md-6">
              <img
                className="img-fluid"
                src={process.env.REACT_APP_SERVER_API + "/static/components/" + about?.image}
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6">
              {about?.description &&
                <div
                  ref={reference}
                  className="overflow-read-more"
                  style={{ textAlign: 'justify', height: readMore ? '100%' : null }}
                  dangerouslySetInnerHTML={{ __html: `${about?.description}` }}
                />
              }
              {(isOverflow || readMore) &&
                <Button
                  variant="text"
                  sx={{ color: 'gray', position: 'absolute', right: 15 }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less..." : "Read More..."}
                </Button>
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

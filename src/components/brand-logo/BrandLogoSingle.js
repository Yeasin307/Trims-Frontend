import PropTypes from "prop-types";
import React from "react";
import { Skeleton } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import loader from '../../data/loader-4.png';

const BrandLogoSingle = ({
  image,
  sliderClassName,
  spaceBottomClass
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px 0px",
    triggerOnce: true
  });

  return (
    <div
      className={`single-brand-logo ${sliderClassName ? sliderClassName : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
      ref={ref}
    >
      {(inView && isLoading) &&
        <Skeleton
          variant="rectangular"
          animation="wave"
        >
          <img
            alt=""
            src={loader}
            style={{ visibility: 'hidden' }}
          />
        </Skeleton>}

      {inView &&
        <img
          alt=""
          src={"/static/components/" + image}
          onLoad={() => { setIsLoading(false) }}
          style={{ display: isLoading ? 'none' : null }}
        />}
    </div>
  );
};

BrandLogoSingle.propTypes = {
  data: PropTypes.string,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default BrandLogoSingle;

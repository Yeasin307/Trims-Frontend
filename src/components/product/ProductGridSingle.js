import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import loader from '../../data/loader-3.png';

const ProductGridSingle = ({
  product,
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
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${sliderClassName ? sliderClassName : ""}`}
        ref={ref}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product?.slug}>

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
                  src={"/static/productimages/" + product?.productDetails[0]?.image}
                  onLoad={() => { setIsLoading(false) }}
                  style={{ display: isLoading ? 'none' : null }}
                />}

              {(inView && !isLoading && product?.productDetails?.length > 1) &&
                <img
                  alt=""
                  src={"/static/productimages/" + product?.productDetails[1]?.image}
                  className="hover-img"
                />}
            </Link>

            <div
              className="product-action"
              style={{ display: isLoading ? 'none' : null }}
            >
              <div className="pro-same-action pro-wishlist">
              </div>
              <div className="pro-same-action pro-cart">
                <Link to={`${process.env.PUBLIC_URL}/product/${product?.slug}`}>
                  Details
                </Link>
              </div>
              <div className="pro-same-action pro-quickview">
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product?.slug}>
                {product?.productName}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;

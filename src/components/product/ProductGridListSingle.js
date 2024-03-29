import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import loader from '../../data/loader-3.png';
// import useProgressiveImage from '../../hooks/useProgressiveImage';
// import loader from '../../data/loader-1.gif';

const ProductGridListSingle = ({
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
  // const loaded_1 = useProgressiveImage(process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[0]?.image);
  // const loaded_2 = useProgressiveImage(process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[1]?.image);

  return (
    <Fragment>
      <div
        className={`col-xl-4 col-sm-6 ${sliderClassName ? sliderClassName : ""
          }`}
        ref={ref}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.slug}>
              {(inView && isLoading) &&
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                >
                  <img
                    alt="Loading..."
                    src={loader}
                    style={{ visibility: 'hidden' }}
                  />
                </Skeleton>}
              {inView &&
                <img
                  alt="Product Img"
                  src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[0]?.image}
                  onLoad={() => { setIsLoading(false) }}
                  className="default-img"
                  style={{ display: isLoading ? 'none' : null }}
                />}

              {(inView && !isLoading && product?.productDetails?.length > 1) &&
                <img
                  alt="Product Img"
                  src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[1]?.image}
                  className="hover-img"
                />}
              {/* <img
                alt=""
                loading="lazy"
                src={loaded_1 || loader}
                className="default-img"
              /> */}
              {/* {product?.productDetails?.length > 1 ? (
                <img
                  alt=""
                  loading="lazy"
                  src={loaded_2 || loader}
                  className="hover-img"
                />
              ) : (
                ""
              )} */}
            </Link>

            <div
              className="product-action"
              style={{ display: isLoading ? 'none' : null }}
            >
              <div className="pro-same-action pro-wishlist">
              </div>
              <div className="pro-same-action pro-cart">
                <Link to={`${process.env.PUBLIC_URL}/product/${product.slug}`}>
                  Details
                </Link>
              </div>
              <div className="pro-same-action pro-quickview">
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.slug}>
                {product.productName}
              </Link>
            </h3>
          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.slug}>
                    {(inView && isLoading) &&
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                      >
                        <img
                          alt="Loading..."
                          src={loader}
                          style={{ visibility: 'hidden' }}
                        />
                      </Skeleton>}
                    {inView &&
                      <img
                        alt="Product Img"
                        src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[0]?.image}
                        onLoad={() => { setIsLoading(false) }}
                        className="default-img img-fluid"
                        style={{ display: isLoading ? 'none' : null }}
                      />}

                    {(inView && !isLoading && product?.productDetails?.length > 1) &&
                      <img
                        alt="Product Img"
                        src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[1]?.image}
                        className="hover-img img-fluid"
                      />}
                    {/* <img
                      className="default-img img-fluid"
                      src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[0]?.image}
                      alt=""
                    />
                    {product?.productDetails?.length > 1 ? (
                      <img
                        className="hover-img img-fluid"
                        src={process.env.REACT_APP_BACKEND_API + "/static/productimages/" + product?.productDetails[1]?.image}
                        alt=""
                      />
                    ) : (
                      ""
                    )} */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.slug}>
                    {product.productName}
                  </Link>
                </h3>
                <h4>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.slug}>
                    {product.title}
                  </Link>
                </h4>
                {product.description ? (
                  <div dangerouslySetInnerHTML={{ __html: product.description }} ></div>
                ) : (
                  ""
                )}

                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                    <Link to={`${process.env.PUBLIC_URL}/product/${product.slug}`}>
                      Details
                    </Link>
                  </div>

                  <div className="shop-list-wishlist ml-10">
                  </div>
                  <div className="shop-list-compare ml-10">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

ProductGridListSingle.propTypes = {
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridListSingle;

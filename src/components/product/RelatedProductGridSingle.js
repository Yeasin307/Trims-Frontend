import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Skeleton } from '@mui/material';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import loader from '../../data/loader-3.png';

const RelatedProductGridSingle = ({
    product,
    sliderClassName,
    spaceBottomClass
}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "50px 0px",
        triggerOnce: true
    });

    return (
        <Fragment>
            <div
                className={`${sliderClassName ? sliderClassName : ""}`}
                ref={ref}
            >
                <div
                    className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
                >
                    <div className="product-img">
                        <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>

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

                            {inView && <img
                                alt=""
                                src={process.env.REACT_APP_SERVER_API + "/static/productimages/" + product?.productDetails[0]?.image}
                                onLoad={() => { setIsLoading(false) }}
                                style={{ display: isLoading ? 'none' : null }}
                            />}

                        </Link>

                        <div
                            className="product-action"
                            style={{ display: isLoading ? 'none' : null }}
                        >
                            <div className="pro-same-action pro-wishlist">
                            </div>
                            <div className="pro-same-action pro-cart">
                                <Link to={`${process.env.PUBLIC_URL}/product/${product?.id}`}>
                                    Details
                                </Link>
                            </div>
                            <div className="pro-same-action pro-quickview">
                            </div>
                        </div>
                    </div>
                    <div className="product-content text-center">
                        <h3>
                            <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>
                                {product?.productName}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

RelatedProductGridSingle.propTypes = {
    product: PropTypes.object,
    sliderClassName: PropTypes.string,
    spaceBottomClass: PropTypes.string,
};

export default RelatedProductGridSingle;

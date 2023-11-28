import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Skeleton, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "./ProductGrid";
import loader from '../../data/loader-3.png';
import SectionTitleOne from "../../components/section-title/SectionTitleOne";
import { getInitialProducts } from "../../redux/actions/productsActions";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { initialProducts } = useSelector((state) => state?.productsData);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
    triggerOnce: true
  });

  useEffect(() => {
    inView && dispatch(getInitialProducts())
      .then(() => {
        setIsLoading(false);
      })
  }, [dispatch, inView])

  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""} ${bgColorClass ? bgColorClass : ""}`}
      ref={ref}
    >
      <div className="container">

        <SectionTitleOne
          titleText="FEATURED PRODUCTS"
          positionClass="text-center"
        />

        <div className="row">

          {isLoading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              < div key={i} className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-100">
                  <div className="product-img">
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                    >
                      <img
                        alt=""
                        src={loader}
                        style={{ visibility: 'hidden' }}
                      />
                    </Skeleton>
                    <Typography component="div" variant='h3'>
                      <Skeleton animation="wave" />
                    </Typography>
                  </div>
                </div>
              </div>
            ))
          }

          {(inView && !isLoading) &&
            <ProductGrid
              products={initialProducts}
              spaceBottomClass="mb-100"
            />
          }

        </div>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProduct;

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "./ProductGrid";
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
    setIsLoading(true);
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
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          }

          {inView &&
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

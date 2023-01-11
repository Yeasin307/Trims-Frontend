import PropTypes from "prop-types";
import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import ProductGrid from "./ProductGrid";
import SectionTitle from "../../components/section-title/SectionTitle";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
    triggerOnce: true
  });

  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""} ${bgColorClass ? bgColorClass : ""}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle titleText="FEATURED PRODUCTS" positionClass="text-center" />
        <div className="row">
          {isLoading &&
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          }
          {inView && <ProductGrid
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            spaceBottomClass="mb-100"
          />}
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

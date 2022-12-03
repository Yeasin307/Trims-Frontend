import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
import { useDispatch } from "react-redux";
import { getProductByCategory } from "../../redux/actions/productActions";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductByCategory())
      .then(() => {
        setIsLoading(false);
      })
  }, [dispatch])

  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        } ${bgColorClass ? bgColorClass : ""}`}
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
          {!isLoading && <ProductGrid
            category={category}
            type=""
            limit={8}
            spaceBottomClass="mb-100"
          />}
        </div>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProduct;

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "./ProductGrid";
import SectionTitle from "../../components/section-title/SectionTitle";
import { getProductsByCategory } from "../../redux/actions/productsActions";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { products } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductsByCategory())
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
            products={products}
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

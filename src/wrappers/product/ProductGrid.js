import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { getProductsByCategory } from "../../redux/actions/productsActions";

const ProductGrid = ({
  isLoading,
  setIsLoading,
  sliderClassName,
  spaceBottomClass
}) => {
  const { products } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductsByCategory())
      .then(() => {
        setIsLoading(false);
      })
  }, [dispatch, setIsLoading])

  return (
    <Fragment>
      {(!isLoading && products) && products?.map(product => {
        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};


export default ProductGrid;

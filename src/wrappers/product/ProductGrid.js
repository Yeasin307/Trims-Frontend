import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ProductGridSingle from "../../components/product/ProductGridSingle";

const ProductGrid = ({
  products,
  sliderClassName,
  spaceBottomClass
}) => {

  return (
    <Fragment>
      {products && products?.map(product => {
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

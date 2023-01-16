import PropTypes from "prop-types";
import React from "react";
import ProductGridList from "./ProductGridList";

const ShopProduct = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductGridList products={products} spaceBottomClass="mb-100" />
      </div>
    </div>
  );
};

ShopProduct.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProduct;

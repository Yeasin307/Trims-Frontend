import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGridList = ({
    products,
    sliderClassName,
    spaceBottomClass
}) => {
    return (
        <Fragment>
            {products.map(product => {
                return (
                    <ProductGridListSingle
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

ProductGridList.propTypes = {
    products: PropTypes.array,
    sliderClassName: PropTypes.string,
    spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
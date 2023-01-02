import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGrid = ({
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

ProductGrid.propTypes = {
    products: PropTypes.array,
    sliderClassName: PropTypes.string,
    spaceBottomClass: PropTypes.string,
};

export default ProductGrid;
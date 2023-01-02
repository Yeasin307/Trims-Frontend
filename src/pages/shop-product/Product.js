import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { getProduct } from "../../redux/actions/productActions";
import { getProductsByCategory } from "../../redux/actions/productsActions";

const Product = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = location;
  const { id } = useParams();
  const { product } = useSelector((state) => state.productData);
  const { products } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProduct(id))
      .then(() => {
        dispatch(getProductsByCategory(product.categoryId))
          .then(() => {
            setIsLoading(false);
          });
      });
  }, [dispatch, id, product.categoryId])

  return (
    <Fragment>
      <MetaTags>
        <title>Trim | Product</title>
        <meta
          name="description"
          content="product page of trim tex bd"
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {isLoading &&
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        }

        {/* product description with image */}
        {!isLoading && <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />}

        {/* related product slider */}
        {!isLoading && <RelatedProductSlider
          spaceBottomClass="pb-95"
          products={products}
        />}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

export default Product;

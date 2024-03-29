import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layout/Layout";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { getProduct } from "../../redux/actions/productActions";

const Product = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const { pathname } = location;
  const { slug } = useParams();
  const { product } = useSelector((state) => state.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProduct(slug))
      .then(() => {
        setIsLoading(false);
      });
  }, [dispatch, slug])

  return (
    <Fragment>
      <MetaTags>
        <title>Trim | Product</title>
        <meta
          name="description"
          content="product page of trim tex bd"
        />
      </MetaTags>

      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Product
      </BreadcrumbsItem> */}

      <Layout headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}

        {isLoading &&
          <div className="container pt-95 pb-100">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }

        {/* product description with image */}
        {!isLoading &&
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={product}
          />}

        {/* related product slider */}
        {(!isLoading && product) &&
          <RelatedProductSlider
            spaceBottomClass="pb-95"
            categoryId={product?.categoryId}
          />}
      </Layout>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object
};

export default Product;

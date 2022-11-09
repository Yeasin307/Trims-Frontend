import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Trims | Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-40" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;

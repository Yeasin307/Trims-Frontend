import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch } from "react-redux";

const HomeFashion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComponent());
  }, [dispatch])

  return (
    <Fragment>
      <MetaTags>
        <title>Trims | Home</title>
        <meta
          name="description"
          content="Home of trims react minimalist eCommerce template."
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

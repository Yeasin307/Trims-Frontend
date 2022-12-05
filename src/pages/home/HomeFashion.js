import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSeventeen from "../../wrappers/hero-slider/HeroSliderSeventeen";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const HomeFashion = () => {
  const { client } = useSelector((state) => state.componentData);
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
          content="Home page of trim tex bd."
        />
      </MetaTags>
      <LayoutOne
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderSeventeen />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-50" />

        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-40" /> */}

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="" />

        <div
          className={`team-area pb-70`}
        >
          <div className="container">
            {/* section title */}
            {client && <SectionTitleTwo
              titleText={client?.title ? client?.title : ''}
              subTitleText={client?.description ? client?.description : ''}
              positionClass="text-center"
              spaceClass="mb-60"
            />}
          </div>
        </div>

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;

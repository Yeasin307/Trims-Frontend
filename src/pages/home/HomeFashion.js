import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { useDispatch, useSelector } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSeventeen from "../../wrappers/hero-slider/HeroSliderSeventeen";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import TabProduct from "../../wrappers/product/TabProduct";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { getComponent } from "../../redux/actions/componentActions";

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
          content="home page of trim tex bd"
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

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-20" />

        {/* featured icon */}
        <div className="container pb-50 pt-20">
          <SectionTitleSeven
            titleText="Our Key Strengths"
            positionClass="text-center"
            borderClass="bottom-border"
            spaceClass="mb-30"
          />
          <FeatureIconSeven spaceTopClass="pt-40" />
        </div>

        {/* client section */}
        <div className={`team-area pb-70`}>
          <div className="container">
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

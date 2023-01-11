import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSeventeen from "../../wrappers/hero-slider/HeroSliderSeventeen";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import TabProduct from "../../wrappers/product/TabProduct";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { getSlider, getClient } from "../../redux/actions/componentActions";

const HomeFashion = () => {
  const { slider } = useSelector((state) => state.componentData);
  const { client } = useSelector((state) => state.componentData);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
    triggerOnce: true
  });

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch])

  useEffect(() => {
    inView && dispatch(getClient());
  }, [dispatch, inView])

  return (
    <Fragment>
      <MetaTags>
        <title>Trim | Home</title>
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
        <HeroSliderSeventeen
          slider={slider}
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-50" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-20" />

        {/* featured icon */}
        <div ref={ref} className="container pb-50 pt-20">
          <SectionTitleSeven
            titleText="Our Key Strengths"
            positionClass="text-center"
            borderClass="bottom-border"
            spaceClass="mb-30"
          />
          <FeatureIconSeven spaceTopClass="pt-40" />
        </div>

        {/* client section */}
        {client && <div className="team-area">
          <div className="container">
            <SectionTitleTwo
              titleText={client?.title ? client?.title : ''}
              subTitleText={client?.description ? client?.description : ''}
              positionClass="text-center"
              spaceClass="mb-60"
            />
            <BrandLogoSliderOne
              images={client?.image}
              spaceBottomClass="pb-70"
            />
          </div>
        </div>}

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;

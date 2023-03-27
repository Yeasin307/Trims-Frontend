import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import Layout from "../../layout/Layout";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SectionTitleThree from "../../components/section-title/SectionTitleThree";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import BrandLogoSlider from "../../wrappers/brand-logo/BrandLogoSlider";
import { getSlider, getClient } from "../../redux/actions/componentActions";

const Home = () => {
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
      <Layout
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSlider
          slider={slider}
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-50" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-20" />

        {/* featured icon */}
        <div ref={ref} className="container pb-50 pt-20">
          <SectionTitleThree
            titleText="Our Key Strengths"
            positionClass="text-center"
            borderClass="bottom-border"
            spaceClass="mb-30"
          />
          <FeatureIcon spaceTopClass="pt-40" />
        </div>

        {/* client section */}
        {client && <div className="container">
          <SectionTitleTwo
            titleText={client?.title ? client?.title : ''}
            subTitleText={client?.description ? client?.description : ''}
            positionClass="text-center"
            spaceClass="mb-60"
          />
          <BrandLogoSlider
            images={client?.image}
            spaceBottomClass="pb-70"
          />
        </div>}

      </Layout>
    </Fragment>
  );
};

export default Home;

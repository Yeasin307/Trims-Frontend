import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
// import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
// import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";

const About = ({ location }) => {
  const { client } = useSelector((state) => state.componentData);
  const { pathname } = location;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComponent());
  }, [dispatch])

  return (
    <Fragment>
      <MetaTags>
        <title>Trims | About us</title>
        <meta
          name="description"
          content="About page of trim tex bd."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

        {/* fun fact */}
        <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        <div
          className={`team-area pt-95 pb-70`}
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

        {/* team member */}
        {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;

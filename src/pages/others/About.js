import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layout/Layout";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BrandLogoSlider from "../../wrappers/brand-logo/BrandLogoSlider";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import { getClient } from "../../redux/actions/componentActions";

const About = ({ location }) => {
  const { client } = useSelector((state) => state.componentData);
  // const { pathname } = location;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient());
  }, [dispatch])

  return (
    <Fragment>
      <MetaTags>
        <title>Trim | About us</title>
        <meta
          name="description"
          content="about page of trim tex bd"
        />
      </MetaTags>
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem> */}
      <Layout headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-50" spaceBottomClass="pb-50" />

        {/* client section */}
        {client && <div className="team-area pt-50">
          <div className="container">
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
          </div>
        </div>}

      </Layout>
    </Fragment >
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;

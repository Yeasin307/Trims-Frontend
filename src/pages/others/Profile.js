import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getClient } from "../../redux/actions/componentActions";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import BrandLogoSlider from "../../wrappers/brand-logo/BrandLogoSlider";

const Profile = ({ location }) => {
    const { profile, client } = useSelector((state) => state.componentData);
    const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
        dispatch(getClient());
    }, [dispatch])

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | About us</title>
                <meta
                    name="description"
                    content="profile page of trim tex bd"
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Profile
            </BreadcrumbsItem>
            <Layout headerTop="visible">

                {/* breadcrumb */}
                <Breadcrumb />

                {/* section title with text */}
                <SectionTitleWithText
                    readMore={true}
                    spaceTopClass="pt-100"
                    spaceBottomClass="pb-95"
                />

                <div className="subscribe-area-3 pb-50">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
                                <div className="subscribe-style-3 text-center">
                                    <div className="subscribe-form-3">
                                        <div className="mc-form">
                                            <div className="clear-3">
                                                <a
                                                    href={process.env.REACT_APP_SERVER_API + "/static/components/" + profile?.file}
                                                    download="trimtex-bd"
                                                >
                                                    <button className="button">
                                                        Download Full Profile
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
        </Fragment>
    );
};

Profile.propTypes = {
    location: PropTypes.object
};

export default Profile;

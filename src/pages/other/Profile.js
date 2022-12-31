import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getComponent } from "../../redux/actions/componentActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";

const Profile = ({ location }) => {
    const { profile } = useSelector((state) => state.componentData);
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
                    content="about page of trim tex bd"
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

            </LayoutOne>
        </Fragment>
    );
};

Profile.propTypes = {
    location: PropTypes.object
};

export default Profile;

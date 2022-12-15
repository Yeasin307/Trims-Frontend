import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";
import file from "../../data/vision-1.png";

const About = ({ location }) => {
    const { client } = useSelector((state) => state.componentData);
    console.log(client);
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

                <div className="subscribe-area-3 pb-50">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
                                <div className="subscribe-style-3 text-center">
                                    <div className="subscribe-form-3">
                                        <div className="mc-form">
                                            <div className="clear-3">
                                                <a
                                                    href={file}
                                                    download="trim-tex-bd"
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

                {/* fun fact */}
                <FunFactOne
                    spaceTopClass="pt-100"
                    spaceBottomClass="pb-70"
                    bgClass="bg-gray-3"
                />

            </LayoutOne>
        </Fragment>
    );
};

About.propTypes = {
    location: PropTypes.object
};

export default About;

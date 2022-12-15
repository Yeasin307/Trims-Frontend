import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";

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

                {/* team member */}
                <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

            </LayoutOne>
        </Fragment>
    );
};

About.propTypes = {
    location: PropTypes.object
};

export default About;

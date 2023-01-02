import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";

const Management = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | About us</title>
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

                {/* team member */}
                <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

            </LayoutOne>
        </Fragment>
    );
};

Management.propTypes = {
    location: PropTypes.object
};

export default Management;

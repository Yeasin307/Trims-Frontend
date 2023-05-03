import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TeamMember from "../../wrappers/team-member/TeamMember";

const Management = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | About us</title>
                <meta
                    name="description"
                    content="management page of trim tex bd"
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Management
            </BreadcrumbsItem>
            <Layout headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                {/* team member */}
                <TeamMember spaceTopClass="pt-95" spaceBottomClass="pb-70" />

            </Layout>
        </Fragment>
    );
};

Management.propTypes = {
    location: PropTypes.object
};

export default Management;

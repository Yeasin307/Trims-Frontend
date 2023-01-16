import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getMission } from "../../redux/actions/componentActions";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import logo from "../../data/mission-1.png";

const Mission = ({ location }) => {
    const { mission } = useSelector((state) => state.componentData);
    const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMission());
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
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                About us
            </BreadcrumbsItem>
            <Layout headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="container pt-100 pb-100">

                    {/* section title */}
                    {mission && <SectionTitleTwo
                        titleText={mission?.title ? mission?.title : ''}
                        subTitleText={mission?.subtitle ? mission?.subtitle : ''}
                        positionClass="text-center"
                        spaceClass="mb-60"
                    />}

                    <div className="row">
                        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                className="img-fluid"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <div
                            className="col-sm-12 col-md-6 text-justify"
                            dangerouslySetInnerHTML={{ __html: `${mission?.description ? mission?.description : ''}` }}
                        />
                    </div>
                </div>

            </Layout>
        </Fragment>
    );
};

Mission.propTypes = {
    location: PropTypes.object
};

export default Mission;

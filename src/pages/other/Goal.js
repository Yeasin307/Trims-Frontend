import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getGoal } from "../../redux/actions/componentActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import logo from "../../data/goal-1.png";

const Goal = ({ location }) => {
    const { goal } = useSelector((state) => state.componentData);
    const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoal());
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
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="container pt-100 pb-100">

                    {/* section title */}
                    {goal && <SectionTitleTwo
                        titleText={goal?.title ? goal?.title : ''}
                        subTitleText={goal?.subtitle ? goal?.subtitle : ''}
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
                            dangerouslySetInnerHTML={{ __html: `${goal?.description ? goal?.description : ''}` }}
                        />
                    </div>
                </div>

            </LayoutOne>
        </Fragment>
    );
};

Goal.propTypes = {
    location: PropTypes.object
};

export default Goal;

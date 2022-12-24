import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const Message = ({ location }) => {
    const { message } = useSelector((state) => state.componentData);
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

                <div className="container pt-100 pb-100">

                    {/* section title */}
                    {message && <SectionTitleTwo
                        titleText={message?.title ? message?.title : ''}
                        subTitleText={message?.subtitle ? message?.subtitle : ''}
                        positionClass="text-center"
                        spaceClass="mb-60"
                    />}

                    <div className="row">
                        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                className="img-fluid"
                                src={`https://server.asdfashionbd.com/static/components/${message?.image}`}
                                alt=""
                            />
                        </div>
                        <div
                            className="col-sm-12 col-md-6 text-justify"
                            dangerouslySetInnerHTML={{ __html: `${message?.description ? message?.description : ''}` }}
                        />
                    </div>
                </div>

            </LayoutOne>
        </Fragment>
    );
};

Message.propTypes = {
    location: PropTypes.object
};

export default Message;

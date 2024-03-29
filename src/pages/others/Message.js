import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../../redux/actions/componentActions";
import Layout from "../../layout/Layout";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const Message = ({ location }) => {
    const { message } = useSelector((state) => state.componentData);
    // const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessage());
    }, [dispatch])

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | About us</title>
                <meta
                    name="description"
                    content="ceo speech page of trim tex bd"
                />
            </MetaTags>
            {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                CEO Speech
            </BreadcrumbsItem> */}
            <Layout headerTop="visible">
                {/* breadcrumb */}
                {/* <Breadcrumb /> */}

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
                                src={process.env.REACT_APP_BACKEND_API + "/static/components/" + message?.image}
                                alt="Message"
                            />
                        </div>
                        <div
                            className="col-sm-12 col-md-6 text-justify"
                            dangerouslySetInnerHTML={{ __html: `${message?.description ? message?.description : ''}` }}
                        />
                    </div>
                </div>

            </Layout>
        </Fragment>
    );
};

Message.propTypes = {
    location: PropTypes.object
};

export default Message;

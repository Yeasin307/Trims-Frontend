import PropTypes from "prop-types";
import React from "react";

const TeamMemberTwoSingle = ({ data, spaceBottomClass }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div
                className={`team-wrapper ${spaceBottomClass ? spaceBottomClass : ""}`}
            >
                <div className="team-img">
                    <img
                        src={`https://server.asdfashionbd.com/static/components/${data.image}`}
                        alt=""
                    // className="img-fluid"
                    />
                </div>
                <div className="team-content text-center">
                    <h4 dangerouslySetInnerHTML={{ __html: data.title }} />
                    <span dangerouslySetInnerHTML={{ __html: data.subtitle }} />
                </div>
            </div>
        </div>
    );
};

TeamMemberTwoSingle.propTypes = {
    data: PropTypes.object,
    spaceBottomClass: PropTypes.string
};

export default TeamMemberTwoSingle;

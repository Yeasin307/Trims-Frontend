import PropTypes from "prop-types";
import React from "react";
import useProgressiveImage from '../../hooks/useProgressiveImage';
import loader from '../../data/loader-2.gif';

const TeamMemberSingleOne = ({ data, spaceBottomClass }) => {
  const loaded = useProgressiveImage("/static/components/" + data.image);

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div
        className={`team-wrapper ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <div className="team-img">
          <img
            src={loaded || loader}
            alt=""
            loading="lazy"
            className="img-fluid"
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

TeamMemberSingleOne.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default TeamMemberSingleOne;

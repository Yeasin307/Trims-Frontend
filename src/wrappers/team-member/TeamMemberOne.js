import PropTypes from "prop-types";
import React, { useEffect } from "react";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";
import TeamMemberTwoSingle from "../../components/team-member/TeamMemberTwoSingle";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  const dispatch = useDispatch();
  const { management } = useSelector((state) => state.componentData);

  useEffect(() => {
    dispatch(getComponent());
  }, [dispatch])

  return (
    <div
      className={`team-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="<h2>Board & Management</h2>"
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row justify-content-center">
          {management &&
            management.slice(0, 2).map((single, key) => {
              return (
                <TeamMemberTwoSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>

        <div className="row">
          {management &&
            management.slice(2, 6).map((single, key) => {
              return (
                <TeamMemberOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>

      </div>
    </div>
  );
};

TeamMemberOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TeamMemberOne;

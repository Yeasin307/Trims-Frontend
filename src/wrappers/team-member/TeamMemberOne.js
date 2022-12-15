import PropTypes from "prop-types";
import React from "react";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import teamMemberData from "../../data/team-members/team-member-one.json";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";
import TeamMemberTwoSingle from "../../components/team-member/TeamMemberTwoSingle";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`team-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="<h2>Board & Management</h2>"
          // subTitleText="<h4>Lorem ipsum dolor sit amet conse ctetu.</h4>"
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="d-flex justify-content-center align-items-center container">
          <div className="row">
            {teamMemberData &&
              teamMemberData.slice(0, 2).map((single, key) => {
                return (
                  <TeamMemberTwoSingle
                    data={single}
                    spaceBottomClass="mb-30"
                    key={key}
                  />
                );
              })}
          </div>
        </div>

        <div className="row">
          {teamMemberData &&
            teamMemberData.slice(2, 6).map((single, key) => {
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

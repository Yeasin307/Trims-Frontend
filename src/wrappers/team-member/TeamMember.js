import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManagement } from "../../redux/actions/componentActions";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import TeamMemberSingleOne from "../../components/team-member/TeamMemberSingleOne";
import TeamMemberSingleTwo from "../../components/team-member/TeamMemberSingleTwo";

const TeamMember = ({ spaceTopClass, spaceBottomClass }) => {
  const dispatch = useDispatch();
  const { management } = useSelector((state) => state.componentData);

  useEffect(() => {
    dispatch(getManagement());
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
                <TeamMemberSingleTwo
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
                <TeamMemberSingleOne
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

TeamMember.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TeamMember;

import PropTypes from "prop-types";
import React from "react";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";
import { useSelector } from "react-redux";

const TextGridOne = ({ spaceBottomClass }) => {
  const { vision, mission, goal } = useSelector((state) => state.componentData);
  const textGridData = [vision, mission, goal];

  return (
    <div
      className={`about-mission-area ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="row">
          {textGridData &&
            textGridData.map((single, key) => {
              return (
                <TextGridOneSingle
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

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;

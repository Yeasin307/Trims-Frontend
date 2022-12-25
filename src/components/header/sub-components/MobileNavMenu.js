import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { getAllAccessories } from "../../../redux/actions/accessoriesActions";

const MobileNavMenu = ({ strings }) => {
  const { accessories } = useSelector((state) => state.accessoriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccessories());
  }, [dispatch])

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home"}>{strings["home"]}</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
            {strings["shop"]}
          </Link>
          <ul className="sub-menu">
            {accessories?.map(data => (
              <li key={data.id} className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL + `/accessories/${data?.id}`}>
                  {data.name}
                </Link>
                <ul className="sub-menu">
                  {data?.child?.map(data => (
                    <li key={data.id}>
                      <Link to={process.env.PUBLIC_URL + `/accessories/${data?.id}`}>
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
            {strings["about_us"]}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
                {strings["profile"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/profile"}>
                    {strings["company_profile"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/management"}>
                    {strings["board_&_management"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
                {strings["message"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/message"}>
                    {strings["ceo_message"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/mission"}>
                    {strings["mission"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/vision"}>
                    {strings["vision"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/goal"}>
                    {strings["goal"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li >
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {strings["why_with_us"]}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/gallery"}>
            {strings["gallery"]}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings, accessories }) => {

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home"}>
            {strings["home"]}
          </Link>
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
                  {data?.Products?.map(data => (
                    <li key={data.id}>
                      <Link to={process.env.PUBLIC_URL + `/product/${data?.id}`}>
                        {data.productName}
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
            <li>
              <Link to={process.env.PUBLIC_URL + "/message"}>
                {strings["ceo_message"]}
              </Link>
            </li>
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
            <li>
              <Link to={process.env.PUBLIC_URL + "/mission&vision"}>
                {strings["mission"]}
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
  strings: PropTypes.object,
  accessories: PropTypes.array
};

export default multilanguage(MobileNavMenu);

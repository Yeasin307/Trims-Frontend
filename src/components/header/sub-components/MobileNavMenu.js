import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ accessories }) => {

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home"}>
            Home
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
            Accessories
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
            About Us
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/message"}>
                CEO Speech
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/profile"}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/management"}>
                Management
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/mission&vision"}>
                Mission & Vision
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/gallery"}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  accessories: PropTypes.array
};

export default MobileNavMenu;

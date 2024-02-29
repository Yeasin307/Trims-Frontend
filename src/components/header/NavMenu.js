import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ menuWhiteClass, sidebarMenu, accessories }) => {

  return (
    <div
      style={{ display: 'flex', justifyContent: 'end' }}
      className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/home"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
              {" "}
              Accessories
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              {accessories?.map(data => (
                <li key={data.id} >
                  <ul>
                    <li className="mega-menu-title">
                      <Link to={process.env.PUBLIC_URL + `/accessories/${data?.slug}`}>
                        {data.name}
                      </Link>
                    </li>
                    {data?.Products?.map(data => (
                      <li key={data.id}>
                        <Link to={process.env.PUBLIC_URL + `/product/${data?.slug}`}>
                          {data.productName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
              About Us
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
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
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  accessories: PropTypes.array
};

export default NavMenu;

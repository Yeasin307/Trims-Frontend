import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu, accessories }) => {

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
              {strings["home"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
              {" "}
              {strings["shop"]}
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
                      <Link to={process.env.PUBLIC_URL + `/accessories/${data?.id}`}>
                        {data.name}
                      </Link>
                    </li>
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
          <li>
            <Link to={process.env.PUBLIC_URL} style={{ pointerEvents: "none" }}>
              {strings["about_us"]}
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
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
  accessories: PropTypes.array
};

export default multilanguage(NavMenu);

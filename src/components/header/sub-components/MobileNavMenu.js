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

            {/* <li>
              {accessories?.map(data => (
                <Link key={data.id} to={process.env.PUBLIC_URL + `/accessories/${data?.id}`}>
                  {data.name}
                </Link>
              ))}
            </li> */}
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>
            {strings["about_us"]}
          </Link>
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

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../data/logo1.png';
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import { getAllAccessories } from "../../redux/actions/accessoriesActions";

const Header = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const { accessories } = useSelector((state) => state.accessoriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccessories());
  }, [dispatch])

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${headerPositionClass ? headerPositionClass : ""
        }`}
    >
      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${top === "visible" ? "d-none d-lg-block" : "d-none"
          } header-top-area ${borderStyle === "fluid-border" ? "border-none" : ""
          }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          <HeaderTop />
        </div>
      </div>

      <div
        className={` ${headerPaddingClass ? headerPaddingClass : ""
          } sticky-bar header-res-padding clearfix ${scroll > headerTop ? "stick" : ""
          }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl={logo} logoClass="logo" />
            </div>
            <div className="col-xl-10 col-lg-10 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu
                accessories={accessories}
              />
            </div>
            <div className="col-md-6 col-8 d-lg-none">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu
          accessories={accessories}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string,
  headerBgClass: PropTypes.string
};

export default Header;

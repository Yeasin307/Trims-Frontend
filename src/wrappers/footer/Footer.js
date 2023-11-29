import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import logo from '../../data/logo1.png';
import FooterCopyright from "../../components/footer/FooterCopyright";

const Footer = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${backgroundColorClass ? backgroundColorClass : ""
        } ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        } ${extraFooterClass ? extraFooterClass : ""} ${spaceLeftClass ? spaceLeftClass : ""
        } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className="col-lg-2 col-sm-4"
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo={logo}
              spaceBottomClass="mb-30"
            />
          </div>
          <div
            className="col-lg-2 col-sm-4"
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/profile"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-4"
          >
            <div
              className="footer-widget mb-30 ml-75"
            >
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6"
          >
            <div className="footer-widget ml-75 mb-30">
              <div className="footer-title">
                <h3>Head Office</h3>
              </div>
              <div className="footer-description">
                <p>
                  House-15, Road-05
                  <br />
                  Block-Dha, Section-12
                  <br />
                  Mirpur, Pallabi, Dhaka
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6"
          >
            <div className="footer-widget ml-75">
              <div className="footer-title">
                <h3>Marketing Office</h3>
              </div>
              <div className="footer-description">
                <p>
                  House-680(E1), Road-09
                  <br />
                  DOHS, Mirpur-12, Dhaka
                  <br />
                  <i className="fa fa-envelope" /> info@trimtex-bd.com
                  <br />
                  <i className="fa fa-phone" /> +880-1822996565
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default Footer;

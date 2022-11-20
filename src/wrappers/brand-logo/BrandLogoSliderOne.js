import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import { useSelector } from "react-redux";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";

const BrandLogoSliderOne = ({ spaceBottomClass, spaceTopClass }) => {
  const { client } = useSelector((state) => state.componentData);
  const settings = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div
      className={`brand-logo-area ${spaceBottomClass ? spaceBottomClass : ""
        }  ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <div className="brand-logo-active">
          <Swiper {...settings}>
            {client?.image &&
              client?.image?.map((single, key) => {
                return (
                  <BrandLogoOneSingle
                    data={single}
                    key={key}
                    sliderClassName="swiper-slide"
                    spaceBottomClass="mb-30"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderOne;

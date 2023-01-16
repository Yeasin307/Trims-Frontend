import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoSingle from "../../components/brand-logo/BrandLogoSingle";

const BrandLogoSlider = ({ spaceBottomClass, spaceTopClass, images }) => {

  const params = {
    loop: true,
    shouldSwiperUpdate: true,
    slidesPerView: 3,
    spaceBetween: 30,
    rebuildOnUpdate: true,
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
          <Swiper {...params}>
            {images &&
              images?.map((single, key) => {
                return (
                  <BrandLogoSingle
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

BrandLogoSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  images: PropTypes.array
};

export default BrandLogoSlider;

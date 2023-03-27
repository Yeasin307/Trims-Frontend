import PropTypes from "prop-types";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay } from "swiper";
import BrandLogoSingle from "../../components/brand-logo/BrandLogoSingle";

const BrandLogoSlider = ({ spaceBottomClass, spaceTopClass, images }) => {

  return (
    <div
      className={`brand-logo-area ${spaceBottomClass ? spaceBottomClass : ""
        }  ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <div className="brand-logo-active">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
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
            }}
            modules={[Autoplay]}>
            {images &&
              images.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BrandLogoSingle
                      data={data}
                      spaceBottomClass="mb-30"
                    />
                  </SwiperSlide>
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

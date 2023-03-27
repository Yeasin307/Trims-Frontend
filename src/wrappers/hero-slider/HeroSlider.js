import PropTypes from "prop-types";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Navigation, Pagination } from "swiper";
import HeroSliderSingle from "../../components/hero-slider/HeroSliderSingle";

const HeroSlider = ({ slider }) => {

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}>
          {slider &&
            slider.map(data => {
              return (
                <SwiperSlide key={data.id}>
                  <HeroSliderSingle
                    data={data}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

HeroSlider.propTypes = {
  slider: PropTypes.array
};

export default HeroSlider;

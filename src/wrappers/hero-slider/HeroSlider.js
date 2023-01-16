import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderSingle from "../../components/hero-slider/HeroSliderSingle";

const HeroSlider = ({ slider }) => {

  const params = {
    effect: "fade",
    shouldSwiperUpdate: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {slider &&
            slider.map((single, key) => {
              return (
                <HeroSliderSingle
                  key={key}
                  data={single}
                  sliderClass="swiper-slide"
                />
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

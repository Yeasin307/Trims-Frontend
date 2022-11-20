import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import { useSelector } from "react-redux";

const HeroSliderOne = () => {
  const { banner } = useSelector((state) => state.componentData);

  const params = {
    effect: "fade",
    spaceBetween: 30,
    loop: true,
    rebuildOnUpdate: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
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
          {banner &&
            banner.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;

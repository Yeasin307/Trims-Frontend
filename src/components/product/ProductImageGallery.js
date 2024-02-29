import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Controller, Navigation, FreeMode } from "swiper";

const ProductImageGallery = ({ product }) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        <LightgalleryProvider
          lightgallerySettings={{ showThumbByDefault: false }}
        >
          {product?.productDetails &&
            product?.productDetails?.map((single, key) => {
              return (
                <LightgalleryItem
                  key={key}
                  group="any"
                  src={"/static/productimages/" + single?.image}
                >
                  <button >
                    <i className="pe-7s-expand1"></i>
                  </button>
                </LightgalleryItem>
              );
            })}
        </LightgalleryProvider>
        <Swiper
          loop={true}
          loopedSlides={4}
          loopedSlidesLimit={false}
          spaceBetween={10}
          navigation={true}
          onSwiper={getGallerySwiper}
          controller={{ control: thumbnailSwiper }}
          modules={[Controller, Navigation]}
        >
          {product?.productDetails &&
            product?.productDetails?.map((single, key) => {
              return (
                <SwiperSlide key={key}>
                  <div className="single-image">
                    <img
                      src={"/static/productimages/" + single?.image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="product-small-image-wrapper mt-15">
        <Swiper
          loop={true}
          freeMode={true}
          slidesPerView={4}
          spaceBetween={10}
          loopedSlides={4}
          loopedSlidesLimit={false}
          touchRatio={0.25}
          slideToClickedSlide={true}
          navigation={true}
          onSwiper={getThumbnailSwiper}
          controller={{ control: gallerySwiper }}
          modules={[Controller, Navigation, FreeMode]}
        >
          {product?.productDetails &&
            product?.productDetails?.map((single, key) => {
              return (
                <SwiperSlide key={key}>
                  <div className="single-image">
                    <img
                      src={"/static/productimages/" + single?.image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.object
};

export default ProductImageGallery;

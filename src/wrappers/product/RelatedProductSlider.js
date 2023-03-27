import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import SectionTitleOne from "../../components/section-title/SectionTitleOne";
import RelatedProductGridSingle from "../../components/product/RelatedProductGridSingle";
import { getProductsByCategory } from "../../redux/actions/productsActions";

const RelatedProductSlider = ({ spaceBottomClass, categoryId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { products } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
    triggerOnce: true
  });

  useEffect(() => {
    setIsLoading(true);
    inView && dispatch(getProductsByCategory(categoryId))
      .then(() => {
        setIsLoading(false);
      });
  }, [dispatch, categoryId, inView])

  return (
    <div
      className={`related-product-area ${spaceBottomClass ? spaceBottomClass : ""}`}
      ref={ref}
    >
      <div className="container">

        <SectionTitleOne
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />

        {isLoading &&
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        }

        {(!isLoading && inView) &&

          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            grabCursor={true}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 4
              },
              768: {
                slidesPerView: 3
              },
              640: {
                slidesPerView: 2
              },
              320: {
                slidesPerView: 1
              }
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {
              products &&
              products?.map(product => {
                return (
                  <SwiperSlide key={product.id}>
                    <RelatedProductGridSingle
                      product={product}
                    />
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        }

      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  categoryId: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
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

  // {...settings}
  // const settings = {
  //   loop: false,
  //   slidesPerView: 4,
  //   grabCursor: true,
  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 4
  //     },
  //     768: {
  //       slidesPerView: 3
  //     },
  //     640: {
  //       slidesPerView: 2
  //     },
  //     320: {
  //       slidesPerView: 1
  //     }
  //   }
  // };

  return (
    <div
      className={`related-product-area ${spaceBottomClass ? spaceBottomClass : ""}`}
      ref={ref}
    >
      <div className="container">

        <SectionTitle
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
          <div className="row">
            <Swiper>
              <ProductGrid
                products={products}
                sliderClassName="swiper-slide"
              />
            </Swiper>
          </div>
        }

      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;

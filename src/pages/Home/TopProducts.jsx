import React from "react";
import ProductItem from "../../components/ProductItem";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import Slider from "react-slick";
import {FaCircle} from "react-icons/fa";
import Spinner from "../../components/Spinner";
import {useGetTopProductsHook} from "../../hooks/useGetTopProducts";

const TopProducts = () => {
  const [products, loading] = useGetTopProductsHook();
  const settings = {
    customPaging: function () {
      return <FaCircle size={15} />;
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots",
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SectionContainer secClassName="top-products-section" withMargin>
      <SectionHead head={"Top Products"} />
      {loading ? (
        <div className="text-center my-5">
          <Spinner />
        </div>
      ) : (
        <Slider {...settings}>
          {products?.map((product) => {
            return (
              <div className="px-2" key={product.id}>
                <ProductItem product={product} />
              </div>
            );
          })}
        </Slider>
      )}
    </SectionContainer>
  );
};

export default TopProducts;

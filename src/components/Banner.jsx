import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import I1 from "../img/1.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Banner() {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplayDisableOnInteraction={false}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={I1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={I1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={I1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={I1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;

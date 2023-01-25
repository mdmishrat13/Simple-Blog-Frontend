import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper";

const img1 = require('./../../../Assets/Images/img-1.jpg')
const img2 = require('./../../../Assets/Images/img-2.jpg')
const img3 = require('./../../../Assets/Images/img3.jpg')

const Home = () => {
  return (
    <Swiper
    pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
>
    <SwiperSlide>
        <img
            className="object-cover w-full h-96"
            src={img1}
            alt=" slide 1"
        />
    </SwiperSlide>
    <SwiperSlide>
        <img
            className="object-cover w-full h-96"
            src={img2}
            alt="slide 2"
        />
    </SwiperSlide>
    <SwiperSlide>
        <img
            className="object-cover w-full h-96"
            src={img3}
            alt="slide 3"
        />
    </SwiperSlide>
</Swiper>
  );
};

export default Home;

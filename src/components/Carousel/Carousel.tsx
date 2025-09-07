// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const nav = useNavigate();

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide onClick={() => nav("/Categories")}>Categories</SwiperSlide>
      <SwiperSlide onClick={() => nav("/Products/men")}>Men Products</SwiperSlide>
      <SwiperSlide onClick={() => nav("/Products/women")}>Women Products</SwiperSlide>
      <SwiperSlide onClick={() => nav("/Products/kids")}>Kids Products</SwiperSlide>
      <SwiperSlide onClick={() => nav("/Products/baby")}>Baby Products</SwiperSlide>
      <SwiperSlide onClick={() => nav("/Products/sport")}>Sports Products</SwiperSlide>
      <SwiperSlide onClick={() => nav("/wishlist")}>Your wishlist</SwiperSlide>
      <SwiperSlide onClick={() => nav("/cart")}>Your cart</SwiperSlide>
      <SwiperSlide onClick={() => nav("/About-us")}>About us</SwiperSlide>
    </Swiper>
  );
}

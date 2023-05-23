import { Background } from '../Servers/Service'
import images from '../Photos'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    
    <div className='perent' >
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_01)}></div></SwiperSlide>
        <SwiperSlide><div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_02)}></div></SwiperSlide>
        <SwiperSlide><div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_03)}></div></SwiperSlide>
        <SwiperSlide> <div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_04)}></div></SwiperSlide>
        <SwiperSlide><div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_05)}></div></SwiperSlide>
        <SwiperSlide><div className='h-[55vh] bg-cover bg-right-top' style={Background(images.home_06)}></div></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider
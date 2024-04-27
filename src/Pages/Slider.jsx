import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
    return (
       <div className="font-nunito-sans">
         <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        effect="flip"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/Lnd02Vt/IMG-6719.jpg"
            alt=""
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/YRC6pDB/IMG-6886.jpg"
            alt=""
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/wCd2SW0/IMG-6878.jpg"
            alt=""
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/wKcqktD/IMG-6718.jpg"
            alt=""
          />
         
        </SwiperSlide>
      </Swiper>
       </div>
    );
};

export default Slider;
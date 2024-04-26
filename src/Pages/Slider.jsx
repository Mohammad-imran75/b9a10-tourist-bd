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
          <div className="lg:absolute slide-title lg:top-40 left-72">
            {" "}
            <h1
              data-aos="flip-left"
              data-aos-duration="2000"
              className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
            >
              Welcome to Our LUXARY Resturants
              <br />
              <span className="text-green-500 lg:ml-36 mt-8">
                Flavar Haven
              </span>{" "}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="2000"
              className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
            >
              Creating a unique dining experience by seamlessly blending culinary
              innovation with cozy ambiance in our restaurant project.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/YRC6pDB/IMG-6886.jpg"
            alt=""
          />
          <div className="lg:absolute slide-title lg:top-40 left-72">
            {" "}
            <h1
              data-aos="flip-left"
              data-aos-duration="2000"
              className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
            >
              Welcome to Our LUXARY Resturants
              <br />
              <span className="text-green-500 lg:ml-36 mt-8">
                Flavar Haven
              </span>{" "}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="2000"
              className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
            >
              Creating a unique dining experience by seamlessly blending culinary
              innovation with cozy ambiance in our restaurant project.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/wCd2SW0/IMG-6878.jpg"
            alt=""
          />
          <div className="lg:absolute slide-title lg:top-40 left-72">
            {" "}
            <h1
              data-aos="flip-left"
              data-aos-duration="2000"
              className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
            >
              Welcome to Our LUXARY Resturants
              <br />
              <span className="text-green-500 lg:ml-36 mt-8">
                Flavar Haven
              </span>{" "}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="2000"
              className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
            >
              Creating a unique dining experience by seamlessly blending culinary
              innovation with cozy ambiance in our restaurant project.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="https://i.ibb.co/wKcqktD/IMG-6718.jpg"
            alt=""
          />
          <div className="lg:absolute slide-title lg:top-40 left-72">
            {" "}
            <h1
              data-aos="flip-left"
              data-aos-duration="2000"
              className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
            >
              Welcome to Our LUXARY Resturants
              <br />
              <span className="text-green-500 lg:ml-36 mt-8">
                Flavar Haven
              </span>{" "}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="2000"
              className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
            >
              Creating a unique dining experience by seamlessly blending culinary
              innovation with cozy ambiance in our restaurant project.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;
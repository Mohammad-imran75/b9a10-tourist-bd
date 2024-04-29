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
import { Helmet } from "react-helmet";

const Slider = () => {
  return (
    <div className="font-nunito-sans">
      <Helmet>
        <title>Slider</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/1GBSdMJ/besakih-temple-bali-indonesia.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
            Komodo National Park <br /> <span>In Indonesia</span>
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
            "Komodo National Park in Indonesia is home to the iconic Komodo dragons and offers breathtaking landscapes of pristine beaches, crystal-clear waters, and rugged terrain."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/tCVSLy8/beautiful-architecture-building-exterior-city-kuala-lumpur-skyline.jpg"
            alt=""
          />
          <div className="lg:absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Kuala LumPur City <br /> <span>In Malaysia</span>
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              "Kuala Lumpur, the vibrant heart of Malaysia, where modern
              skyscrapers stand tall against a backdrop of rich cultural
              heritage and bustling street markets, offering a truly mesmerizing
              blend of tradition and innovation."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/wCd2SW0/IMG-6878.jpg"
            alt=""
          />
          <div className="absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Cox'sBazar Sea beach and <br />{" "}
              <span>Iconic Railway Station </span>
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200 mt-3">
              With its picturesque setting and serene ambiance, Cox's Bazar Sea
              Beach is an idyllic retreat for nature lovers
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "90vh" }}
            src="https://i.ibb.co/ByW77Hw/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand.jpg"
            alt=""
          />
          <div className="absolute top-[200px] left-[350px] ">
            <h1 className="text-5xl text-rose-500 font-extrabold">
              Phi Phi Islands in Thailand {" "}
            </h1>
            <p className="text-xl lg:w-[500px] mx-auto font-semibold text-yellow-200">
              One word that encapsulates the beauty and allure of Phi Phi
              Islands in Thailand is "Paradise."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

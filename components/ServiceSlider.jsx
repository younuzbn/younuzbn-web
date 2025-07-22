import { SiAndroid, SiApple, SiUnity, SiBlender } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for Android and iOS using modern frameworks.",
  },
  {
    Icon: SiApple,
    title: "iOS Development",
    description: "Native iOS applications with Swift and the latest Apple technologies.",
  },
  {
    Icon: SiUnity,
    title: "Unity Development",
    description: "Interactive 3D, XR, and game experiences using Unity.",
  },
  {
    Icon: SiBlender,
    title: "Blender 3D",
    description: "3D modeling, animation, and asset creation with Blender.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

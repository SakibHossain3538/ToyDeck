import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import MyContainer from "../MyContainer.jsx/MyContainer";
import pexels1 from "../assets/pexels1.jpg"
import pexels2 from "../assets/pexels2.jpg"
import pexels3 from "../assets/pexels3.jpg"
import Category from "./Category";
export default function HeroImage() {
  return (
    <MyContainer>
      <div className="flex flex-col text-center 
      items-center mt-9 text-gray-700 ">
      <div className="text-4xl font-bold">
        Welcome To ToyHub
      </div>
      <div className="text-2xl font-semibold m-3">
        A Place Where You Can Find Your Childs Intrest
      </div>
      <div className="text-xl mb-3">
        Lets Dive Into the Toys World
        </div>
         </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl overflow-hidden md:h-[400px] xl:h-[600px]"
          >
              <SwiperSlide>
                  <img src={pexels1} alt="" />
              </SwiperSlide>
              
              <SwiperSlide>
                  <img src={pexels2} alt="" />
              </SwiperSlide>
              
              <SwiperSlide>
                  <img src={pexels3} alt="" />
              </SwiperSlide>
      </Swiper>
      <Category></Category>
    </MyContainer>
  );
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { styled } from "styled-components";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const SwiperWrap = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export default function Gallery({ list }) {
  return (
    <SwiperWrap>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          // slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow]}
        className="swiper"
      >
        {Array.from({ length: 2 }).map(() => {
          return (
            <>
              {list.map((data) => {
                return (
                  <SwiperSlide>
                    <div className="relative w-72 h-80 rounded-lg overflow-hidden ">
                      <Image
                        style={{
                          aspectRatio: "1/1",
                          objectFit: "fill",
                          width: "100%",
                          height: "100%",
                        }}
                        width={100}
                        height={300}
                        alt=""
                        src={data.src}
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full h-auto text-white p-4">
                        <h2 className="text-3xl ">{data.username}</h2>
                        <p className="text-sm">{data.about}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          );
        })}

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </SwiperWrap>
  );
}

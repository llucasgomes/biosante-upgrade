"use client";

import { register } from "swiper/element/bundle";
register();

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { poppins } from "@/app/ui/fonts";
import { FirtCarrosel } from "@/lib/data";

export default function Carrousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{ delay: 5000 }}
      className="mt-24  h-[400px] "
    >
      {FirtCarrosel.map((item) => {
        return (
          <SwiperSlide className="w-full" key={item.image}>
            <div className="w-full h-full flex  flex-col gap-6 justify-center items-center relative">
              <div className="w-2/4 max-w-[400px] flex flex-col justify-center gap-4 items-center h-full absolute left-[50px] top-7">
                <h2
                  className={`${poppins.className} font-bold text-2xl text-center mb-5`}
                >
                  {item.title}
                </h2>
                <p className={`${poppins.className}`}>{item.content}</p>
              </div>
              <Image
                src={item.image}
                width={900}
                height={600}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

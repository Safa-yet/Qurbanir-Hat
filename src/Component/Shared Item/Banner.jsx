"use client";

import Image from "next/image";

import bannerImg1 from '../../image/eid-al-adha-celebration-with-sheep-palm-trees.jpg'
import bannerImg2 from '../../image/cows-eating-lush-grass-green-field-front-fuji-mountain-japan.jpg'
import bannerImg3 from '../../image/photorealistic-view-cow-grazing-outdoors-with-urban-landscape.jpg'
import bannerImg4 from '../../image/3d838743-1694-4eb3-b764-f77df0314311.jpg'
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css'

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "সহজেই খুঁজে নিন আপনার পছন্দের কোরবানির পশু",
      subtitle: "আধুনিক উপায়ে, নিশ্চিত",
      img: bannerImg1,
    },
    {
      id: 2,
      title: "সেরা গরু ও ছাগল সংগ্রহ",
      subtitle: "বিশ্বাসযোগ্য বিক্রেতা",
      img: bannerImg2,
    },
    {
      id: 3,
      title: "অনলাইনে বুক করুন কোরবানির পশু",
      subtitle: "দ্রুত ও সহজ",
      img: bannerImg3,
    },
    {
      id: 4,
      title: "আপনার বাজেট অনুযায়ী পশু",
      subtitle: "সবচেয়ে ভালো দামে",
      img: bannerImg4,
    },
  ];

  return (
    
     <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        loop={false}
        
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[300px] md:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              
              {/* Image */}
              <Image
                src={slide.img}
                alt="banner"
                fill
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60 flex items-center">
                <div className="text-white px-6 md:px-16 max-w-xl">
                  <h1 className="text-xl md:text-4xl font-bold mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg mb-4">
                    {slide.subtitle}
                  </p>

                  <button className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400">
                    Browse Animals
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )

};

export default Banner;
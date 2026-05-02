"use client";

import Image from "next/image";

import bannerImg1 from '../../image/eid-al-adha-celebration-with-sheep-palm-trees.jpg'
import bannerImg2 from '../../image/cows-eating-lush-grass-green-field-front-fuji-mountain-japan.jpg'
import bannerImg3 from '../../image/photorealistic-view-cow-grazing-outdoors-with-urban-landscape.jpg'
import bannerImg4 from '../../image/3d838743-1694-4eb3-b764-f77df0314311.jpg'
import { Button, Chip } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({
    subsets : ["latin"],
    weight: ["400", "500", "600", "700"], 

})


const Banner = () => {

const slides = [
  {
    id: 1,
    title: "Easily find your preferred Qurbani animal",
    subtitle: "Discover healthy and well-cared animals from trusted sellers,\nensuring a smooth and reliable Qurbani experience.",
    img: bannerImg1,
  },
  {
    id: 2,
    title: "Best collection of cows and goats",
    subtitle: "Explore a wide range of premium cows and goats,\ncarefully selected to meet your expectations and needs.",
    img: bannerImg2,
  },
  {
    id: 3,
    title: "Book your Qurbani animal online",
    subtitle: "Reserve your animal from the comfort of your home,\nwith a fast, secure, and hassle-free booking process.",
    img: bannerImg3,
  },
  {
    id: 4,
    title: "Animals according to your budget",
    subtitle: "Find the perfect Qurbani animal within your budget,\nwithout compromising on quality or health standards.",
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
        className="w-full h-[60vh] md:h-[90vh]"
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
                <div className="text-white  container mx-auto">
                   <Chip className="gap-2 px-4 py-1 text-amber-700  border border-amber-500"><BsFillMoonStarsFill /> Eid Speacial</Chip>
                  <h1 className={`${alegreya.className} text-xl md:text-5xl font-bold my-3 md:w-xl text-amber-300`}>
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg mb-4 text-gray-400 max-w-lg">
                    {slide.subtitle}
                  </p>
                  <Button className='bg-green-600 rounded-lg'>See Animal</Button>

                 
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
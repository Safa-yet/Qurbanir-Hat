"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "সহজেই খুঁজে নিন আপনার পছন্দের কোরবানির পশু",
      subtitle: "আধুনিক উপায়ে, নিশ্চিত",
      img: "/images/cow1.jpg",
    },
    {
      id: 2,
      title: "সেরা গরু ও ছাগল সংগ্রহ",
      subtitle: "বিশ্বাসযোগ্য বিক্রেতা",
      img: "/images/cow2.jpg",
    },
    {
      id: 3,
      title: "অনলাইনে বুক করুন কোরবানির পশু",
      subtitle: "দ্রুত ও সহজ",
      img: "/images/cow3.jpg",
    },
    {
      id: 4,
      title: "আপনার বাজেট অনুযায়ী পশু",
      subtitle: "সবচেয়ে ভালো দামে",
      img: "/images/cow4.jpg",
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[300px] md:h-[500px]">
            {/* Image */}
            <Image
              src={slide.img}
              alt="banner"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="text-left text-white px-6 md:px-16 max-w-xl">
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
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
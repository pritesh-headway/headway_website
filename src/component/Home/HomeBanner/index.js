import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeBanner = ({ data }) => {
  const banners = data || []

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  // Wait until refs are set
  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="relative w-full">
      {navigationReady && (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={500}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            // Bind navigation buttons after swiper is initialized
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {banners.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src.image} alt={`Banner ${idx + 1}`} className="w-full h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full shadow"
      >
        <ChevronLeft size={25} strokeWidth={3} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full shadow"
      >
        <ChevronRight size={25} strokeWidth={3} />
      </button>
    </div>
  );
};

export default HomeBanner;

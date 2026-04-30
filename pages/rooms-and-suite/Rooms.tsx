"use client";

import { suite } from "@/data/rooms-and-suite-data/data";
import Rooms_Card from "@/componens/rooms-and-suit/Rooms_Card";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Rooms = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        
        // Responsive breakpoints
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {suite.map((room, index) => (
          <SwiperSlide key={index}>
            <Rooms_Card
              img={room.img}
              price={room.price}
              roomType={room.roomType}
              description={room.description}
              details={room.details}
              slug={room.slug}
              link={room.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rooms;
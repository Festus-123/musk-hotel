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
    <section
      id="rooms-and-suite"
      data-theme="light"
      className="bg-[#edd29814] w-full flex items-center justify-center p-4 mt-20 md:py-16"
    >
      <div className="w-full max-w-350 flex flex-col items-center gap-10">

        {/* Heading text */}
        <div className="flex flex-col gap-2 font-extralight text-center">
          <p className="uppercase tracking-wider text-[#efb268] text-sm md:text-base">
            Exquisite and luxurious
          </p>
          <h1 className="text-3xl md:text-6xl tracking-wide font-medium">
            Rooms and suite collection
          </h1>
        </div>

        {/* Swiper wrapper */}
        <div className="w-full flex justify-center  ">
          <div className="w-full max-w-300">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {suite.map((room, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="w-full">
                    <Rooms_Card
                      img={room.img}
                      price={room.price}
                      roomType={room.roomType}
                      description={room.description}
                      details={room.details}
                      slug={room.slug}
                      link={room.link}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Rooms;
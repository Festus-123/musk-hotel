"use client";

import Image, { StaticImageData } from "next/image";

import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import room5 from "@/assets/lounge.png";
import suite1 from "@/assets/suite-1.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export type OFFERIMAGE = {
  img: StaticImageData;
  rating: string;
};

const News = () => {
  const Offers: OFFERIMAGE[] = [
    { img: room1, rating: "4.5" },
    { img: room2, rating: "4.2" },
    { img: room3, rating: "4.7" },
    { img: room4, rating: "4.0" },
    { img: room5, rating: "4.8" },
    { img: suite1, rating: "4.9" },
  ];

  return (
    <section
      id="news-and-offers"
      className="w-full h-full bg-[#ddb6800f] mt-20 p-4 md:p-16"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-2 mb-10 text-center">
        <p className="uppercase text-[#d2b478] text-lg tracking-wide">
          News and Offers
        </p>
        <h1 className="text-3xl md:text-5xl font-medium">
          Latest News and Special Offers
        </h1>
      </div>

      {/* Swiper Slider */}
      <div className="w-full p-4 flex items-center">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            760: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="py-10"
        >
          {Offers.map((offer, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "260px" }}
              className="flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                {/* Image */}
                <Image
                  src={offer.img}
                  alt="room"
                  className="w-full h-80 md:h-100 object-cover"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  ⭐ {offer.rating}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* News characters display */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 p-4 md:p-8">
        {/* Best interior */}
        <div className="text-3xl font-medium">
          <h1>Elegant and modern Interior Design</h1>
          <p className="text-lg text-gray-700 tracking-wide font-light mt-4">
            Experience the epitome of elegance and modernity in our hotel’s
            interior design. Our spaces are thoughtfully curated to blend
            contemporary aesthetics with timeless sophistication, creating an
            inviting atmosphere that caters to both comfort and style.
          </p>
        </div>

        {/* Welcoming Employees */}
        <div className="text-3xl font-medium">
          <h1>Welcoming Employees</h1>
          <p className="text-lg text-gray-700 tracking-wide font-light mt-4">
            Our dedicated team of professionals is committed to providing
            exceptional service and ensuring your stay is memorable. With a
            passion for hospitality, our employees go above and beyond to meet
            your needs and exceed your expectations.
          </p>
        </div>

        {/* Available 24 7 */}
        <div className="text-3xl font-medium">
          <h1>Available 24/7</h1>
          <p className="text-lg text-gray-700 tracking-wide font-light mt-4">
            We understand that your needs may arise at any time, which is why
            our services are available around the clock. Whether you require
            assistance, have questions, or need anything during your stay, our
            team is here to ensure you have a seamless and enjoyable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;

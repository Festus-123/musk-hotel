import { IconType } from "react-icons";
import Image, { StaticImageData } from "next/image";

import hotel from "@/assets/hotel.png";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";

import { LuWifi, LuCar, LuUtensils, LuDumbbell, LuWaves } from "react-icons/lu";
import { MdSpa } from "react-icons/md";
import ExploreBadge from "../explore-badge/ExploreBadge";

export type FACILITIES = {
  icon: IconType;
  title: string;
  des: string;
};

export type EXPLOREBADGE = {
  img: StaticImageData;
  name: string;
  info: string;
};

const Explore = () => {
  const facilities: FACILITIES[] = [
    {
      icon: LuWifi,
      title: "High speed Wifi",
      des: "Enjoy seamless, high-speed internet access throughout the hotel",
    },
    {
      icon: LuCar,
      title: "Parking space",
      des: "Ample and secure parking space provided for all hotel guests",
    },
    {
      icon: LuUtensils,
      title: "Restaurant and Bar",
      des: "Savor gourmet dishes and cocktails at our elegant restaurant and bar",
    },
    {
      icon: MdSpa,
      title: "Spa Center",
      des: "Relax and rejuvenate with our premium spa treatments",
    },
    {
      icon: LuDumbbell,
      title: "Fitness Center",
      des: "Stay active with our fully equipped modern gym facilities",
    },
    {
      icon: LuWaves,
      title: "Swimming Pool",
      des: "Enjoy a refreshing swim in our luxurious pool area",
    },
  ];

  const exploreBadge: EXPLOREBADGE[] = [
    {
      img: room1,
      name: "Musk hotel",
      info: "Place high up",
    },
    {
      img: room2,
      name: "Musk branch",
      info: "A stunning city view",
    },
    {
      img: room3,
      name: "Musk an Holdings",
      info: "A stunning Street view",
    },
    {
      img: room4,
      name: "Musk beach",
      info: "nice View a musk beach hotel",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-10 mt-20">
      <div className="w-full max-w-350 flex flex-col gap-12 items-center">
        {/* Header */}
        <div className="w-full flex flex-col gap-2 text-center px-2 sm:px-4 md:px-8">
          <p className="text-[#e7c27af6] uppercase tracking-wide text-sm md:text-base">
            Modern and Comfortable
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium">
            Facilities and Amenities
          </h1>
        </div>

        {/* Facilities */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-4 md:px-8">
          {facilities.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon (lighter style) */}
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#d1b87c]">
                <item.icon />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-light text-gray-600">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore video placeholder */}
      <section id="explore-musk" className="w-full h-full hidde max-w-450  ">
        <div className="w-full relative">
          <Image
            loading="lazy"
            src={hotel}
            alt="explore hotel image"
            width={700}
            height={500}
            className="w-full h-140 object-center object-cover relative"
          />
          <h1 className="absolute w-full h-full inset-0 text-center  text-xl md:text-6xl italic text-gray-700">
            Explore
          </h1>
        </div>

        {/* Explore hotel babdges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  p-8 md:p-16 ">
          {exploreBadge.map((item, index) => (
            <ExploreBadge
              key={index}
              img={item.img}
              name={item.name}
              info={item.info}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Explore;

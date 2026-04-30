import About_Card from "@/componens/About_card.tsx/About_Card";
import faventRoom from "@/assets/favent-room.png";
import lightThemed from "@/assets/light-themed.png";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaBath, FaPeopleArrows, FaDollarSign } from "react-icons/fa";

import { TiLocation } from "react-icons/ti";

const Overview = () => {
  const aboutCards = [
    {
      icon: TiLocation,
      title: "Located in the heart of the city",
      description:
        "Ideally loacated in the heart of the city for easy access and convinence",
    },
    {
      icon: FaBath,
      title: "Luxurious modern and confortable",
      description:
        "Experience a luxurious modern and fully equiped space for comfort",
    },
    {
      icon: FaPeopleArrows,
      title: "Friendly and Welcoming staff",
      description:
        "Our friendly and welcoming staf ensure aelightful stay every time",
    },
    {
      icon: FaDollarSign,
      title: "Best price and great offers",
      description:
        "Enjoy unbeatable prices with fantastic offers tailored just for you",
    },
  ];

  const reviews: {
    img: string;
    title: string;
    tag: string;
    description: string;
  }[] = [
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excelent",
      description: "3.5k Reviews on Booking",
    },
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excelent",
      description: "3.5k Reviews on Booking",
    },
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excelent",
      description: "3.5k Reviews on Booking",
    },
  ];
  return (
    <section data-theme="light" className="w-full h-full">
      {/* About card section */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-start border-b border-gray-300 p-4 md:p-16 gap-2">
        {aboutCards.map((item, index) => (
          <About_Card
            key={index}
            Icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* descriptive */}
      <div className="p-4 md:p-0 flex flex-col items-center gap-5">
        <div className="p-2 md:p-16 flex flex-col md:flex-row items-center gap-5 md:gap-10 border md:border-none border-[#d4b320df]">
          {/* images */}
          <div className="flex gap-10 p-4 items-center w-full md:w-fit">
            <Image
              loading="lazy"
              src={faventRoom}
              alt="hotel room"
              width={300}
              height={800}
              className="w-full md:w-fit h-110 object-cover object-center"
            />
            <Image
              loading="lazy"
              src={lightThemed}
              alt="hotel room"
              width={400}
              height={800}
              className="hidden md:block h-130 objet-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-3 p-8">
            <p className="font-extralight uppercase tracking-wider">
              welcome to musk
            </p>

            <h1 className="text-xl md:text-2xl font-bold">
              Luxury hotel in the heart o the city
            </h1>

            <p className="w-full md:w-sm font-light">
              Musk luxury hotel, in the heart of thr city, offers over 500
              modern, luxuriouu rooms, Enjoy premium facilities, perfect for
              relations and indulgence, Our friendly staff ensures a seamless,
              personalised experience, with stunning city views, Discover true
              luxury and hospitality at musk.
            </p>

            <button className="bg-[#df8e1ded] p-2 w-max text-white flex items-center gap-2 uppercase text-lg hover:scale-110 cursor-pointer">
              <span>Read more</span>
              <span>
                <FiArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-center p-4 md:p-8">
          {reviews.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                loading="lazy"
                src={item.img}
                alt="reviews image"
                width={30}
                height={30}
                className="w-10 h-10"
              />
              <div className="flex flex-col leading-tight text-sm tracking-wide">
                <h1 className="flex items-center">
                  <span className="font-bold text-lg md:text-xl">
                    {item.title}
                  </span>
                  <span className="text-sm font-extralight">{item.tag}</span>
                </h1>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Rooms and suit */}
    </section>
  );
};

export default Overview;

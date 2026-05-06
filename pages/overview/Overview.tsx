import About_Card from "@/componens/About_card.tsx/About_Card";
import faventRoom from "@/assets/favent-room.png";
import lightThemed from "@/assets/light-themed.png";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

// lighter (regular) icons
import { LuBath, LuUsers, LuDollarSign, LuMapPin } from "react-icons/lu";

const Overview = () => {
  const aboutCards = [
    {
      icon: LuMapPin,
      title: "Located in the heart of the city",
      description:
        "Ideally located in the heart of the city for easy access and convenience",
    },
    {
      icon: LuBath,
      title: "Luxurious modern and comfortable",
      description:
        "Experience a luxurious, modern and fully equipped space for comfort",
    },
    {
      icon: LuUsers,
      title: "Friendly and welcoming staff",
      description:
        "Our friendly and welcoming staff ensure a delightful stay every time",
    },
    {
      icon: LuDollarSign,
      title: "Best price and great offers",
      description:
        "Enjoy unbeatable prices with fantastic offers tailored just for you",
    },
  ];

  const reviews = [
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excellent",
      description: "3.5k Reviews on Booking",
    },
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excellent",
      description: "3.5k Reviews on Booking",
    },
    {
      img: "/hotel.png",
      title: "4.9/5 ⭐",
      tag: "Excellent",
      description: "3.5k Reviews on Booking",
    },
  ];

  return (
    <section data-theme="light" className="w-full flex justify-center px-4 overflow-x-hidden">
      <div className="w-full max-w-350">

        {/* About card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-300 py-6 md:py-10 gap-4">
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
        <div className="flex flex-col items-center gap-10 py-10">

          <div className="flex flex-col lg:flex-row items-center gap-8 p-4 md:p-8">

            {/* images */}
            <div className="relative flex gap-3 items-center justify-center w-full lg:w-auto">

              <Image
                loading="lazy"
                src={faventRoom}
                alt="hotel room"
                width={260}
                height={500}
                className="w-full lg:w-70 h-100 lg:h-100 object-cover"
              />

              <Image
                loading="lazy"
                src={lightThemed}
                alt="hotel room"
                width={300}
                height={500}
                className="w-full lg:w-75 h-100 lg:h-120 object-cover hidden md:block"
              />
            </div>

            {/* text */}
            <div className="flex flex-col gap-4 px-2 md:px-4 w-full lg:w-sm xl:w-lg max-w-xl">
              <p className="font-extralight uppercase tracking-wider text-sm md:text-base">
                welcome to musk
              </p>

              <h1 className="text-2xl md:text-5xl font-bold">
                Luxury hotel in the heart of the city
              </h1>

              <p className="font-light text-sm md:text-base text-gray-600">
                Musk luxury hotel, in the heart of the city, offers over 500
                modern, luxurious rooms. Enjoy premium facilities, perfect for
                relaxation and indulgence. Our friendly staff ensures a seamless,
                personalised experience with stunning city views. Discover true
                luxury and hospitality at Musk.
              </p>

              <button className="bg-[#df8e1ded] px-4 py-2 w-max text-white flex items-center gap-2 uppercase text-sm md:text-base hover:scale-105 transition">
                <span>Read more</span>
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* reviews */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center justify-center">
            {reviews.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  loading="lazy"
                  src={item.img}
                  alt="reviews image"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover"
                />
                <div className="flex flex-col leading-tight text-sm tracking-wide">
                  <h1 className="flex items-center gap-1">
                    <span className="font-bold text-lg md:text-xl">
                      {item.title}
                    </span>
                    <span className="text-xs font-light">{item.tag}</span>
                  </h1>
                  <p className="font-light text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;
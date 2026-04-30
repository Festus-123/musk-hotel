import { IconType } from "react-icons";
import { FaParking } from "react-icons/fa";
import { FaBowlFood, FaInternetExplorer } from "react-icons/fa6";

export type FACILITIES = {
  icon: IconType;
  title: string;
  des: string;
};

const Explore = () => {
  const facilities: FACILITIES[] = [
    {
      icon: FaInternetExplorer,
      title: "High speed Wifi",
      des: "Enjoy seamless, high-speed internet access throughout the hotel",
    },
    {
      icon: FaParking,
      title: "Parking space",
      des: "Ample and secure parking space provided for all hotel guest",
    },
    {
      icon: FaBowlFood,
      title: "Restaurant and Bar",
      des: "Savor gourmet dishes and cocktails at our elegant restaurant and bar",
    },
  ];
  return (
    <div className=" p-4 md:p-8 lg:p-16 flex flex-col gap-10 items-center justify-center mt-20">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-[#e8c075] uppercase tracking-wide">
          Modern and Comfortable
        </p>
        <h1 className="text-2xl md:text-3xl font-medium">Facilities an ammenities</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {facilities.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="text-3xl md:text-6xl font-extralight text-[#d1b87c]">
              <item.icon />
            </div>
            <div className="font-bold text-2xl md:text-3xl flex flex-col gap-2">
              <h1>{item.title}</h1>
              <p className="text-base md:text-lg font-extralight">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

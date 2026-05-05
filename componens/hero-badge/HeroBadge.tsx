import { FiArrowRight } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <div className="w-full max-w--125 flex flex-col-reverse text-xs sm:text-base gap-10 md:flex-row items-center justify-evenly">
      <div className="flex items-center">
        {/* Existence */}
        <div className=" bg-white text-center text-black p-2 md:p-3">
          <p className="">
            <b>Since 1970</b>{" "}
            <span className="font-extralight">54 years of operation</span>
          </p>
        </div>

        {/* Navigate to story */}
        <div className="bg-[#da9a40] text-white uppercase p-2 md:p-3">
          <button className="flex items-center gap-2">
            <span>Musk Story</span>
            <span>
              {" "}
              <FiArrowRight />{" "}
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="flex items-center gap-2">
            <span className="font-medium">+6.4k </span>
            <span className="font-light">Bookings</span>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium">4.49/5 ⭐ </span>
            <span className="font-light">3.5k Ratings</span>
        </p>

      </div>

    </div>
  );
};

export default HeroBadge;

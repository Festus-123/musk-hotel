import Image from "next/image";
import suite2 from "@/assets/suite-2.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full msx-w-400 h-full p-8 md:p-16 "
    >
      <div className="mb-6 text-center">
        <p className="uppercase text-[#dfbf60] tracking-wide md:text-lg">
            Contact us Now
        </p>
        <h1 className="italic font-medium text-[2em] md:text-[4em]">
          Musk hotel
        </h1>
      </div>

      <div className="relative w-full flex items-center justify-center p-8 md:p-16 ">
        <div className="absolute w-full h-full">
          <Image
            src={suite2}
            alt="contact image"
            width={800}
            height={400}
            className="object-cover object-center w-full h-full"
          />
          </div>

          <div className="bg-white/40 absolute w-full h-full backdrop-grayscale backdrop-blur-sm"/>

        {/* Form section */}
        <form action="" className="relative w-full md:w-max grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-white font-extralight">
          <div className="p-2 flex flex-col gap-1 ">
            <label htmlFor="" className="">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-black/20  border-none outline-none p-2"
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="bg-black/20  border-none outline-none p-2"
            />
          </div>
          <div className="p-2 flex flex-col gap-1 md:col-span-2">
            <label htmlFor="" className="">
              Description
            </label>
            <textarea
              placeholder="Book me a room"
              className="bg-black/20 border-none outline-none p-2 min-h-20 max-h-40"
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label htmlFor="" className="">
              Room type
            </label>
            <input
              type="text"
              placeholder="standard"
              className="bg-black/20 border-none outline-none p-2"
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label htmlFor="" className="">
              No of Occupants
            </label>
            <input
              type="number"
              placeholder="1"
              className="bg-black/20 border-none outline-none p-2"
            />
          </div>
          <button className="md:col-span-2 bg-[#d7b149] text-white p-2 cursor-pointer hover:scale-x-120">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

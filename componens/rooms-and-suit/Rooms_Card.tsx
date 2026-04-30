import Image from "next/image";
import { FaReceipt } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import type { ROOMS } from "@/data/rooms-and-suite-data/data";
import Link from "next/link";

const Rooms_Card = ({
    img,
    price,
    roomType,
    description,
    details,
    slug,
    link
}: ROOMS) => {
    return (
        <section
            data-theme="light"
            className="p-4 md:p-16 bg-[#edd29814] flex flex-col items-center justify-center gap-5 md:gap-10">

                {/* Heading text */}
                <div
                    className="flex flex-col gap-2 font-extralight text-center">
                        <p className="uppercase tracking-wider text-[#efb268]">Exquisite and luxurious</p>
                        <h1 className="text-xl md:text-3xl tracking-wide">
                            Rooms and suite collection
                        </h1>
                </div>

                {/* Rooms and suite display section */}
                <div
                    className="bg-white flex flex-col md:flex-row items-center gap-0">
                        <Image 
                            loading="lazy"
                            src={img}
                            alt="room image"
                            width={500}
                            height={400}
                            className="object-cover object-center"/>

                        <div className="p-8 md:p-16 flex flex-col gap-4">

                            {/* price tag */}
                            <div className="flex items-center gap-2">
                                <span className="font-extralight">from:</span>
                                <sup className="font-bold">$</sup>
                                <span className="font-bold text-2xl md:text-3xl">{price}</span>
                                <span className="uppercase font-extralight ">NIGHT</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                {roomType}
                            </h1>
                            <p className="text-sm md:text-base font-extralight w-full md:w-lg">
                                {description}
                            </p>
                            <div
                                className="w-full grid grid-cols-2 gap-2 font-extralight">
                                    { details.map((item, index) => (
                                        <div key={index} className="uppercase md:text-lg flex items-center gap-2">
                                            <span className="font-extralight "><item.icon /> </span>
                                            <p>{item.text}</p>
                                        </div>
                                    ))}
                            </div>
                            <div className="flex items-center gap-5">
                                <Link
                                    href={link}
                                    className="bg-[#e6b650] text-white p-2 px-5 uppercase flex items-center gap-1 cursor-pointer hover:scale-110">
                                    <FaReceipt />
                                    <span>Book now</span>
                                </Link>
                                <Link
                                    href={`/rooms-and-suite/${slug}`}
                                    className="flex items-center gap-1 text-black border p-2 px-5 cursor-pointer hover:scale-110">
                                    <span>view room</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    
                </div>
            
        </section>
    );
}

export default Rooms_Card;
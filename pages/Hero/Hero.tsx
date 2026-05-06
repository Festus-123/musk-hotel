import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HeroBadge from "@/componens/hero-badge/HeroBadge";


const Hero = () => {
    return (
        <section
            id="home"
            data-theme="dark"
            className="relative w-full h-screen text-white flex items-center md:justify-center p-4 md:p-2 overflow-x-hidden">

                <div className="bg-black/40 absolute inset-0 w-full h-full z-10"/>

                <Image 
                    loading="lazy"
                    src="/brouwn-suit.png"
                    alt="hero image"
                    width={700}
                    height={700}
                    className="absolute inset-0 w-full h-full object-center object-cover"/>

                <div className="relative flex flex-col gap-4 md:items-center z-20 mt-10 md:mt-20">

                    <span>⭐⭐⭐⭐⭐</span>

                <h1 className="uppercase text-[2em] sm:text-[3em] md:text-[5em] lg:text-[6em] md:text-center">
                    Musk Luxury Hotel
                </h1>

                <p className="md:text-center tracking-wide text-lg">
                    Located in the heart of the city, this luxurious modern hotel offers <br />
                    top-notch ammenities for a perfect stay
                </p>

                <button className="flex items-center gap-2 md:text-lg cursor-pointer hover:scale-110">
                    <span>Explore</span>
                    <span> <FiArrowRight /> </span>
                </button>
                </div>

                <div className="absolute bottom-0 z-20 w-full">
                    <HeroBadge />
                </div>
            
        </section>
    );
}

export default Hero;
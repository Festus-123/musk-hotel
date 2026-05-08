"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiHotel } from "react-icons/bi"
import { LuMenu } from "react-icons/lu";
import { FiX } from "react-icons/fi";

const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const pathname = usePathname();
    console.log(pathname)

    const links: {name: string, link: string}[] = [
        { name: "Home", link: "home" },
        { name: "Rooms & suits", link: "rooms-and-suite" },
        { name: "Explore musk", link: "explore-musk" },
        { name: "news & offers", link: "news-and-offers" },
        { name: "contact", link: "contact" },
    ]

    const handleMobileNav = () => {
        if(mobile) {
            setMobile(false)
        }else {
            setMobile(true)
        }
    }

    return (
        <div className="bg-white/80 fixed top-0 w-full z-50 flex flex-row items-center justify-between p-4 text-black">
            {/* Logo section */}
            <div className="">
                <h1 className="italic text-2xl">
                    Musk Hotel
                </h1>
            </div>

            {/* Nav container for big screens */}
            {/* Links container */}
            <div className="hidden md:flex md:flex-row items-center gap-4">
                { links.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.link}`}
                        className={`uppercase text-base ${pathname === item.link && "text-[#c0691d] font-bold"}`}>
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Nav section for mobile evice */}
            { mobile && (
                <div className="absolute bg-white/80 backdrop-blur-lg w-full h-screen text-black top-full flex flex-col p-8 text-right justify-center gap-5 text-[3em] transition duration-1000">
                { links.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.link}`}
                        className={`uppercase text-base ${pathname === item.link && "text-[#c0691d] font-bold"}`}>
                        {item.name}
                    </a>
                ))}
            </div>
            )}

            {/* Call to action button */}
            <div className="hidden lg:block">
                <button className="flex items-center gap-2 uppercase bg-[#e7c357] p-2 text-white">
                    <span className="text-3xl"><BiHotel /></span>
                    <span>Reservation</span>
                </button>
            </div>

            <div className="md:hidden">
                <button
                    onClick={handleMobileNav}
                    className="">
                    {mobile ? <FiX /> : <LuMenu />}
                </button>
            </div>
        </div>
    );
}

export default Navbar;